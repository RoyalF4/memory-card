import Header from './components/Header';
import Game from './components/Game';
import { useState } from 'react';
import { useEffect } from 'react';

const URL =
  'https://ddragon.leagueoflegends.com/cdn/14.5.1/data/en_US/champion.json';

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [championData, setChampionData] = useState({});

  useEffect(() => {
    const fetchChampionData = async () => {
      try {
        const response = await fetch(URL);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        const champions = data.data;
        const championsObject = {};
        for (const champion in champions) {
          const championName = champions[champion].name;
          const imageURL = `https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_0.jpg`;
          championsObject[championName] = imageURL;
        }
        setChampionData(championsObject);
      } catch (error) {
        console.log('Error fetching champion data: ', error);
      }
    };

    fetchChampionData();
  }, []);

  return (
    <div className="app-container">
      <Header score={score} bestScore={bestScore} />
      <Game />
    </div>
  );
}

export default App;
