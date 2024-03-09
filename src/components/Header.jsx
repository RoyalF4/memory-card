import '../css/Header.css';
import logoImg from '../assets/LoL_Logo.png';
function Header({ score, bestScore }) {
  return (
    <header>
      <img src={logoImg} alt="LoL Logo" />
      <h1>Memory Game</h1>
      <h3>Score: {score}</h3>
      <h3>Best Score: {bestScore}</h3>
    </header>
  );
}

export default Header;
