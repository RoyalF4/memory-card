import './css/App.css';
import Header from './components/Header';
import Game from './components/Game';
import { useState } from 'react';
import { useEffect } from 'react';

const URL =
  'https://ddragon.leagueoflegends.com/cdn/14.5.1/data/en_US/champion.json';
const board_size = 10;

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [championData, setChampionData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchChampionData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const champions = data.data;
        const championsArray = [];
        for (const champion in champions) {
          const championName = champions[champion].name;
          const imageURL = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_0.jpg`;
          championsArray.push({
            name: championName,
            imageURL: imageURL,
          });
        }
        setChampionData(championsArray);
        setIsLoading(false);
      } catch (error) {
        console.log('Error fetching champion data: ', error);
      }
    };
    fetchChampionData();
  }, []);

  function handleScore(isClicked) {
    if (isClicked) {
      if (score > bestScore) setBestScore(score);
      setScore(0);
    } else if (score === board_size - 1) {
      setBestScore(score + 1);
      setScore(0);
    } else {
      setScore(score + 1);
    }
  }
  return (
    <div className="app-container">
      <Header score={score} bestScore={bestScore} />
      {!isLoading && (
        <Game
          championData={championData}
          score={score}
          handleScore={handleScore}
          board_size={board_size}
        />
      )}
    </div>
  );
}

export default App;
