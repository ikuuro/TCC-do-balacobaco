package br.projeto.tcc.skillcode_spring_boot.controller;

import br.projeto.tcc.skillcode_spring_boot.model.usuario;
import br.projeto.tcc.skillcode_spring_boot.repository.usuarioRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

import java.net.URI;
import java.util.List;
@RestController
@RequestMapping("api/v1/usuarios")
public class usuarioController {

    @Autowired
    private usuarioRepository usuarioRepository;

    @GetMapping
    public List<usuario> getAllUsuarios() {
        return usuarioRepository.findAll();
    }

    @GetMapping("/{id}")
    public ResponseEntity<usuario> getUsuarioById(@PathVariable Integer id) {
        return ResponseEntity.ok(
            usuarioRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Usuário não encontrado"))
        );
    }

    @PostMapping
    public ResponseEntity<usuario> createUsuario(@RequestBody usuario usuario) {
        usuario savedUsuario = usuarioRepository.save(usuario);
        
        URI location = ServletUriComponentsBuilder.fromCurrentRequest()
            .path("/{id}")
            .buildAndExpand(savedUsuario.getId())
            .toUri();
            
        return ResponseEntity.created(location).body(savedUsuario);
    }

    @PutMapping("/{id}")
    public ResponseEntity<usuario> updateUsuario(
            @PathVariable Integer id,
            @RequestBody usuario usuarioDetails) {
        
        usuario usuario = usuarioRepository.findById(id).orElseThrow(() -> new ResourceNotFoundException("Usuário não encontrado"));
            
        usuario.setNome(usuarioDetails.getNome());
        usuario.setEmail(usuarioDetails.getEmail());
        usuario.setLogin(usuarioDetails.getLogin());
        usuario.setSenhaHash(usuarioDetails.getSenhaHash());
        usuario.setTelefone(usuarioDetails.getTelefone());
        usuario.setPontuacao(usuarioDetails.getPontuacao());
        
        return ResponseEntity.ok(usuarioRepository.update(usuario));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteUsuario(@PathVariable Integer id) {
        usuario usuario = usuarioRepository.findById(id)
            .orElseThrow(() -> new ResourceNotFoundException("Usuário não encontrado"));
            
        usuarioRepository.deleteById(id);
        return ResponseEntity.noContent().build();
    }
}