package projeto.tcc.skillcode.controller;

import projeto.tcc.skillcode.model.Usuario;
import projeto.tcc.skillcode.repository.UsuarioRepository;
import projeto.tcc.skillcode.controller.UsuarioController;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/usuarios")
public class UsuarioController {

    @Autowired
    private UsuarioRepository usuarioRepository;

    @GetMapping("/new")
    public String showNewForm(Model model) {
        model.addAttribute("usuario", new Usuario());
        return "usuarios/form";
    }

    @GetMapping
    public String listUsuarios(Model model) {
        model.addAttribute("usuarios", usuarioRepository.findAll());
        return "usuarios/list";
    }

    @GetMapping("/new")
    public String showCreateForm(Model model) {
        model.addAttribute("usuario", new Usuario());
        return "usuarios/form";
    }

    @PostMapping("/save")
    public String saveUsuario(@ModelAttribute Usuario usuario) {
        usuarioRepository.save(usuario);
        return "redirect:/usuarios";
    }

    @GetMapping("/edit/{id}")
    public String showEditForm(@PathVariable int id, Model model) {
        model.addAttribute("usuario", usuarioRepository.findById(id));
        return "usuarios/form";
    }

    @PostMapping("/update/{id}")
    public String updateUsuario(@PathVariable int id, @ModelAttribute Usuario usuario) {
        usuario.setId(id);
        usuarioRepository.update(usuario);
        return "redirect:/usuarios";
    }

    @GetMapping("/delete/{id}")
    public String deleteUsuario(@PathVariable int id) {
        usuarioRepository.deleteById(id);
        return "redirect:/usuarios";
    }

}