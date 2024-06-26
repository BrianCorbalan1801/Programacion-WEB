// src/App.jsx
import React from 'react';
import './componentes/App.css';
import CharacterList from './componentes/Personajes';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Rick and Morty Characters</h1>
      </header>
      <CharacterList />
    </div>
  );
};

export default App;