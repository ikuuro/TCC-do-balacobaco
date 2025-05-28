package projeto.tcc.skillcode.repository;

import projeto.tcc.skillcode.model.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario, Integer> {

}
