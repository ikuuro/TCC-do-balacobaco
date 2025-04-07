package br.projeto.tcc.skillcode_spring_boot.repository;

import br.projeto.tcc.skillcode_spring_boot.model.usuario;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.sql.PreparedStatement;
import java.util.List;
import java.util.Objects;

@Repository
public class usuarioRepository {

    @Autowired
    private JdbcTemplate jdbcTemplate;

    public usuario save(usuario usuario) {
        KeyHolder keyHolder = new GeneratedKeyHolder();
        
        jdbcTemplate.update(connection -> {
            PreparedStatement ps = connection.prepareStatement(
                "INSERT INTO usuarios (nome, email, login, senha_hash, telefone, pontuacao) " +
                "VALUES (?, ?, ?, ?, ?, ?)", 
                new String[]{"id"}
            );
            ps.setString(1, usuario.getNome());
            ps.setString(2, usuario.getEmail());
            ps.setString(3, usuario.getLogin());
            ps.setString(4, usuario.getSenha());
            ps.setString(5, usuario.getTelefone());
            ps.setInt(6, usuario.getPontuacao());
            return ps;
        }, keyHolder);

        usuario.setId(Objects.requireNonNull(keyHolder.getKey()).intValue());
        return usuario;
    }

    public List<usuario> findAll() {
        return jdbcTemplate.query(
            "SELECT * FROM usuarios", 
            new BeanPropertyRowMapper<>(usuario.class)
        );
    }

    public usuario findById(Integer id) {
        return jdbcTemplate.queryForObject(
            "SELECT * FROM usuarios WHERE id = ?",
            new BeanPropertyRowMapper<>(usuario.class),
            id
        );
    }

    public usuario update(usuario usuario) {
        jdbcTemplate.update(
            "UPDATE usuarios SET nome=?, email=?, login=?, senha_hash=?, telefone=?, pontuacao=? WHERE id=?",
            usuario.getNome(),
            usuario.getEmail(),
            usuario.getLogin(),
            usuario.getSenha(),
            usuario.getTelefone(),
            usuario.getPontuacao(),
            usuario.getId()
        );
        return usuario;
    }

    public void deleteById(Integer id) {
        jdbcTemplate.update("DELETE FROM usuarios WHERE id=?", id);
    }

}