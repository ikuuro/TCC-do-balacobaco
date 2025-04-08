package projeto.tcc.skillcode.repository;

import projeto.tcc.skillcode.model.Usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UsuarioRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public int save(Usuario usuario) {
        return jdbcTemplate.update(
            "INSERT INTO usuarios (nome, email, login, senha_hash, telefone, pontuacao) VALUES (?, ?, ?, ?, ?, ?)",
            usuario.getNome(), usuario.getEmail(), usuario.getLogin(), 
            usuario.getSenha(), usuario.getTelefone(), usuario.getPontuacao()
        );
    }

    public List<Usuario> findAll() {
        return jdbcTemplate.query(
            "SELECT * FROM usuarios", 
            new BeanPropertyRowMapper<>(Usuario.class)
        );
    }

    public Usuario findById(int id) {
        return jdbcTemplate.queryForObject(
            "SELECT * FROM usuarios WHERE id = ?",
            new BeanPropertyRowMapper<>(Usuario.class),
            id
        );
    }

    public int update(Usuario usuario) {
        return jdbcTemplate.update(
            "UPDATE usuarios SET nome=?, email=?, login=?, senha_hash=?, telefone=?, pontuacao=? WHERE id=?",
            usuario.getNome(), usuario.getEmail(), usuario.getLogin(),
            usuario.getSenha(), usuario.getTelefone(), usuario.getPontuacao(),
            usuario.getId()
        );
    }

    public int deleteById(int id) {
        return jdbcTemplate.update("DELETE FROM usuarios WHERE id=?", id);
    }

}
