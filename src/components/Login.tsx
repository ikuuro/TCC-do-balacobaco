import React, { useState } from 'react';
import CreateAccount from './CreateAccount.tsx';

const Login: React.FC<{ onLogin: (user: any) => void }> = ({ onLogin }) => {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const [error, setError] = useState('');
  const [showCreate, setShowCreate] = useState(false);

  if (showCreate) {
    return <CreateAccount onAccountCreated={onLogin} onBack={() => setShowCreate(false)} />;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const res = await fetch('/api/usuarios/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ login, senha })
      });
      if (res.ok) {
        const user = await res.json();
        onLogin(user);
      } else {
        setError('Login ou senha inválidos.');
      }
    } catch {
      setError('Erro ao conectar ao servidor.');
    }
  };

  return (
    <div className="min-h-screen grid-background flex items-center justify-center">
      <div className="login-box" style={{ color: '#111' }}>
        <h2 className="neon-text" style={{ textAlign: 'center', fontSize: '2.25rem', fontWeight: 'bold', marginBottom: '1.5rem', color: '#111' }}>Login</h2>
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="text"
            placeholder="Login"
            value={login}
            onChange={e => setLogin(e.target.value)}
            required
            className="login-input"
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={e => setSenha(e.target.value)}
            required
            className="login-input"
          />
          <button
            type="submit"
            className="login-btn"
          >
            Entrar
          </button>
        </form>
        <a
          href="/oauth2/authorization/google"
          className="login-btn"
          style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', background: '#fff', color: '#444', border: '1px solid #ccc', marginTop: '1rem', textAlign: 'center', gap: 8 }}
        >
          <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" style={{ width: 20, height: 20, display: 'inline-block' }} />
          Entrar com Google
        </a>
        <button
          className="create-btn"
          onClick={() => setShowCreate(true)}
        >
          Criar Conta
        </button>
        {error && <div className="login-error">{error}</div>}
      </div>
    </div>
  );
};

export default Login;
