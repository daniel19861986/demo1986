import React from 'react';
import './App.css';
import { Penguin } from 'penguin_danielbarbu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Using PenguinButton with the "penguin-prime" attribute */}
        <Penguin styleType="penguin-prime">Prime Button</Penguin>

        {/* Using PenguinButton with the "penguin-duo" attribute */}
        <Penguin styleType="penguin-duo">Duo Button</Penguin>

        {/* Add more buttons with different styleType props as needed */}
      </header>
    </div>
  );
}

export default App;

