import '../css/main.css';
import Card from './Card';
import { useState } from 'react';

const BOARD_SIZE = 6;

function Game({ championData }) {
  const [champions, setChampions] = useState(getChampionSet());

  function generateRandomNumbers(max, count) {
    const uniqueNumbers = new Set();
    while (uniqueNumbers.size < count) {
      const randomNumber = Math.floor(Math.random() * max);
      console.log(randomNumber);
      uniqueNumbers.add(randomNumber);
    }
    return uniqueNumbers;
  }

  function getChampionSet() {
    const indexSet = generateRandomNumbers(
      Object.keys(championData).length,
      BOARD_SIZE
    );
    return [...indexSet].map((index) => {
      return championData[index];
    });
  }

  return (
    <main>
      {[...champions].map((champion) => {
        const { name, imageURL } = champion;
        return <Card key={name} name={name} imageURL={imageURL} />;
      })}
    </main>
  );
}

export default Game;
