package projeto.tcc.skillcode.model;

import jakarta.persistence.*;

@Entity
@Table(name="usuarios")
public class Usuario {

    @Id
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Integer id;
    private String nome;
    private String email;
    private String login;
    private String senha;
    private Integer pontuacao;

    public Usuario(){}

    public Usuario(String nome, String email, String login, String senha){
        this.nome = nome;
        this.email = email;
        this.login = login;
        this.senha = senha;
    }

    public Usuario(Integer id, String nome, String email, String login, String senha, Integer pontuacao){
        this.id = id;
        this.nome = nome;
        this.email = email;
        this.login = login;
        this.senha = senha;
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
    
    public Integer getPontuacao() {
        return pontuacao;
    }
    
    public void setPontuacao(Integer pontuacao) {
        this.pontuacao = pontuacao;
    }
    

}
