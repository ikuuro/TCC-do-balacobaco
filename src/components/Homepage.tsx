import React from 'react';
import { useNavigate } from 'react-router-dom';

const Homepage: React.FC = () => {
  const navigate = useNavigate();
  const handleStart = () => {
    navigate('/create-account');
  };

  return (
    <div>
      <header>
        <div className="navbar-content">
          <a href="#" className="logo-link">
            <img src="/homepage/logotipo.png" alt="Logo SkillCode" className="logo" width="200" />
          </a>
          <div className="botoes">
            <button className="btn login">Entrar</button>
            <button className="btn cadastro">Cadastre-se</button>
          </div>
        </div>
      </header>
      <main className="container">
        <h1>Seja bem-vindo ao SkillCode!</h1>
        <div className="sobre-box">
          <p>
            O SkillCode nasceu com uma missão simples: tornar o aprendizado de programação acessível,
            divertido e envolvente. Nosso objetivo é ir além do tradicional "copie e cole". Queremos que você
            entenda, pratique e sinta orgulho do que está criando.
          </p>
          <p>Vamos codar juntos? 🚀</p>
        </div>
        <button onClick={handleStart} className="legendary-btn">
          <span className="btn-text">Comece aqui</span>
          <span className="glow"></span>
          <span className="particles"></span>
        </button>
        
        <div className="ranking-box">
          <h2>Ranking Geral</h2>
          <div className="ranking-scroll">
            <table className="ranking-table">
              <thead>
                <tr>
                  <th>Nome</th>
                  <th>Pontuação</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Amigo 01</td><td>800 pts</td></tr>
                <tr><td>Amigo 02</td><td>750 pts</td></tr>
                <tr><td>Amigo 03</td><td>740 pts</td></tr>
                <tr><td>Amigo 04</td><td>710 pts</td></tr>
                <tr><td>Amigo 05</td><td>690 pts</td></tr>
                <tr><td>Amigo 06</td><td>660 pts</td></tr>
                <tr><td>Amigo 07</td><td>640 pts</td></tr>
                <tr><td>Amigo 08</td><td>600 pts</td></tr>
                <tr><td>Amigo 09</td><td>580 pts</td></tr>
                <tr><td>Amigo 10</td><td>550 pts</td></tr>
                <tr><td>Amigo 11</td><td>520 pts</td></tr>
                <tr><td>Amigo 12</td><td>500 pts</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
      <footer>
        <div className="footer-section">
          <h3>Sobre o SkillCode</h3>
          <p>Aprenda programação de forma <span>descomplicada</span> e <span>divertida</span>. Do zero ao código profissional!</p>
          <p>✉️ contato@skillcode.com.br</p>
        </div>
        <div className="footer-section">
          <h3>Junte-se à Comunidade</h3>
          <div className="social-icons">
            {/* SVG icons here, copy from homepage.html if needed */}
          </div>
          <p>Participe do nosso <a href="#">Discord</a> para tirar dúvidas!</p>
        </div>
      </footer>
    </div>
  );
};

export default Homepage;