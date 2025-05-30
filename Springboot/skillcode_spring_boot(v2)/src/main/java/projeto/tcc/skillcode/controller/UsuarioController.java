package projeto.tcc.skillcode.controller;

import projeto.tcc.skillcode.repository.UsuarioRepository;
import projeto.tcc.skillcode.model.Usuario;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.http.ResponseEntity;
import org.springframework.http.HttpStatus;
import org.springframework.jdbc.core.JdbcTemplate;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioRepository repo;

    @Autowired
    private JdbcTemplate jdbcTemplate;

    @GetMapping
    public List<Usuario> getUsuarios(){
        return repo.findAll();
    }

    @PostMapping("/create")
    public ResponseEntity<Usuario> createAccount(@RequestBody Usuario usuario) {
        String sql = "INSERT INTO usuarios (nome, email, login, senha) VALUES (?, ?, ?, SHA2(?, 256))";
        jdbcTemplate.update(sql, usuario.getNome(), usuario.getEmail(), usuario.getLogin(), usuario.getSenha());
        List<Usuario> usuarios = repo.findByLogin(usuario.getLogin());
        if (!usuarios.isEmpty()) {
            return new ResponseEntity<>(usuarios.get(0), HttpStatus.CREATED);
        } else {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/{id}")
    public ResponseEntity<Usuario> getUsuarioById(@PathVariable Integer id) {
        return repo.findById(id)
                .map(usuario -> ResponseEntity.ok(usuario))
                .orElse(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public ResponseEntity<Usuario> updateUsuario(@PathVariable Integer id, @RequestBody Usuario usuarioDetails) {
        return repo.findById(id)
                .map(usuario -> {
                    usuario.setNome(usuarioDetails.getNome());
                    usuario.setEmail(usuarioDetails.getEmail());
                    usuario.setLogin(usuarioDetails.getLogin());
                    usuario.setSenha(usuarioDetails.getSenha());
                    Usuario updatedUsuario = repo.save(usuario);
                    return ResponseEntity.ok(updatedUsuario);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUsuario(@PathVariable Integer id) {
        return repo.findById(id)
                .map(usuario -> {
                    repo.delete(usuario);
                    return new ResponseEntity<Void>(HttpStatus.NO_CONTENT);
                })
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping("/login")
    public ResponseEntity<Usuario> login(@RequestBody Usuario loginRequest) {
        String sql = "SELECT * FROM usuarios WHERE (login = ? OR email = ?) AND senha = SHA2(?, 256)";
        List<Usuario> usuarios = jdbcTemplate.query(
            sql,
            (rs, rowNum) -> {
                Usuario u = new Usuario();
                u.setId(rs.getInt("id"));
                u.setNome(rs.getString("nome"));
                u.setEmail(rs.getString("email"));
                u.setLogin(rs.getString("login"));
                u.setSenha(rs.getString("senha"));
                u.setPontuacao(rs.getInt("pontuacao"));
                return u;
            },
            loginRequest.getLogin(), loginRequest.getLogin(), loginRequest.getSenha()
        );
        if (!usuarios.isEmpty()) {
            return ResponseEntity.ok(usuarios.get(0));
        } else {
            return ResponseEntity.status(HttpStatus.UNAUTHORIZED).build();
        }
    }

}