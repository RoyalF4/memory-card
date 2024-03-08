import '../css/Header.css';
function Header({ score, bestScore }) {
  return (
    <header>
      <h1>League of Legends Memory Game</h1>
      <h3>Score: {score}</h3>
      <h3>Best Score: {bestScore}</h3>
    </header>
  );
}

export default Header;
