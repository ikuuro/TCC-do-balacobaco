<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import CreateAccount from './components/CreateAccount';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create-account" element={<CreateAccount />} />
      </Routes>
    </Router>
  );
=======
import Homepage from './Homepage';
import './homepage.css';

function App() {
  return <Homepage />;
>>>>>>> 5dc94c7 (Alinhar backend, SQL e homepage React com tabela usuario e restaurar homepage.html)
}

export default App;
