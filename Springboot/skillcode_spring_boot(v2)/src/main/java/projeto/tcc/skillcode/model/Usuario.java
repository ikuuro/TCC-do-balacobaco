package projeto.tcc.skillcode.model;

import jakarta.persistence.*;

@Entity
<<<<<<< HEAD
@Table(name="Usuario")
=======
@Table(name="usuarios")
>>>>>>> main
public class Usuario {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    private String nome;
    private String email;
    private String login;
    private String senha;
<<<<<<< HEAD
    private String telefone;
=======
>>>>>>> main
    private Integer pontuacao;

    public Usuario(){}

    public Usuario(String nome, String email, String login, String senha){
        this.nome = nome;
        this.email = email;
        this.login = login;
        this.senha = senha;
    }

<<<<<<< HEAD
    public Usuario(Integer id, String nome, String email, String login, String senha, String telefone, Integer pontuacao){
=======
    public Usuario(Integer id, String nome, String email, String login, String senha, Integer pontuacao){
>>>>>>> main
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.login = login;
        this.senha = senha;
<<<<<<< HEAD
        this.telefone = telefone;
=======
>>>>>>> main
        this.pontuacao = pontuacao;
    }

    public Integer getId(){
        return id;
    }

    public void setId(Integer id){
        this.id = id;
    }
    
    public String getNome() {
        return nome;
    }
    
    public void setNome(String nome) {
        this.nome = nome;
    }
    
    public String getEmail() {
        return email;
    }
    
    public void setEmail(String email) {
        this.email = email;
    }
    
    public String getLogin() {
        return login;
    }
    
    public void setLogin(String login) {
        this.login = login;
    }
    
    public String getSenha() {
        return senha;
    }
    
    public void setSenha(String senha) {
        this.senha = senha;
    }
    
<<<<<<< HEAD
    public String getTelefone() {
        return telefone;
    }
    
    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }
    
=======
>>>>>>> main
    public Integer getPontuacao() {
        return pontuacao;
    }
    
    public void setPontuacao(Integer pontuacao) {
        this.pontuacao = pontuacao;
    }
    

}
