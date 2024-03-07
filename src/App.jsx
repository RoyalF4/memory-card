import Header from './components/Header';
import Game from './components/Game';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  return (
    <div className="app-container">
      <Header />
      <Game />
    </div>
  );
}

export default App;
