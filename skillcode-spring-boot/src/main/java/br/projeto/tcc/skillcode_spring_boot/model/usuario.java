package br.projeto.tcc.skillcode_spring_boot.model;

public class usuario {

    Integer id;
    String nome;
    String email;
    String login;
    String senha_hash;
    String telefone;
    Integer pontuacao;

    public usuario() {
    }

    public usuario(String nome, String email, String login) {
        
        this.nome = nome;
        this.email = email;
        this.login = login;
    }

    public Integer getId() {
        return id;
    }

    public String getNome() {
        return nome;
    }

    public String getEmail() {
        return email;
    }

    public String getLogin() {
        return login;
    }

    public String getSenha() {
        return senha_hash;
    }

    public String getTelefone() {
        return telefone;
    }

    public Integer getPontuacao() {
        return pontuacao;
    }

    public void setId(int id){
        this.id= id;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public void senha(String senha) {
        this.senha_hash = senha;
    }

    public void setTelefone(String telefone) {
        this.telefone = telefone;
    }

    public void setPontuacao(Integer pontuacao) {
        this.pontuacao = pontuacao;
    }
}
