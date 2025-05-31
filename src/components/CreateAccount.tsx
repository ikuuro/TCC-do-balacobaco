import React, { useState } from 'react';

const CreateAccount: React.FC = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    try {
      const res = await fetch('/api/usuarios/create', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ nome, email, login, senha })
      });
      if (res.ok) {
        setSuccess('Conta criada com sucesso!');
      } else {
        setError('Erro ao criar conta.');
      }
    } catch {
      setError('Erro ao conectar ao servidor.');
    }
  };

  return (
    <div className="min-h-screen grid-background flex items-center justify-center">
      <div className="login-box" style={{ color: '#111' }}>
        <h2 className="neon-text" style={{ textAlign: 'center', fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#111' }}>Criar Conta</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input type="text" placeholder="Nome" value={nome} onChange={e => setNome(e.target.value)} required className="login-input" />
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required className="login-input" />
          <input type="text" placeholder="Login" value={login} onChange={e => setLogin(e.target.value)} required className="login-input" />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            required
            className="login-input"
          />
          <button type="submit" className="login-btn">Criar Conta</button>
        </form>
        {error && <div className="login-error">{error}</div>}
        {success && <div style={{ color: '#39FF14', marginTop: 16, textAlign: 'center' }}>{success}</div>}
      </div>
    </div>
  );
};

export default CreateAccount;
