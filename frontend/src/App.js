import React, { useState, useEffect } from 'react';
import './App.css';
import Chat from './components/Chat/Chat';
import Mascot from './components/Mascot/Mascot';
import { FaSun, FaMoon } from 'react-icons/fa'; // Importar ícones de sol e lua

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  return (
    <div className={`App ${theme}`}>
      <button onClick={toggleTheme} className="theme-toggle-button">
        {theme === 'light' ? <FaMoon /> : <FaSun />}
      </button>
      <Mascot />
      <Chat />
    </div>
  );
}

export default App;
