package projeto.tcc.skillcode.repository;

import projeto.tcc.skillcode.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {
    List<Usuario> findByNome(String nome); 
    List<Usuario> findByEmail(String email);
    List<Usuario> findByLogin(String login);
}
