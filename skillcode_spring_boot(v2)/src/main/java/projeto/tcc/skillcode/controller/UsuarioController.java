package projeto.tcc.skillcode.controller;

import projeto.tcc.skillcode.repository.UsuarioRepository;
import projeto.tcc.skillcode.model.Usuario;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RestController
@RequestMapping("/api/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioRepository repo;

    @GetMapping
    public List<Usuario> getUsuarios(){
        return repo.findAll();
    }

}
