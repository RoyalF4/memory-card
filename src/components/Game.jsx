import '../css/main.css';
import Card from './Card';
import { useState } from 'react';

const BOARD_SIZE = 6;

function Game({ championData }) {
  const [championGroup, setChampionGroup] = useState(getChampionGroup());

  function getChampionGroup() {
    const indexSet = generateRandomNumbers(championData.length, BOARD_SIZE);
    return [...indexSet].map((index) => {
      const champion = championData[index];
      return { ...champion, isClicked: false };
    });
  }

  function generateRandomNumbers(max, count) {
    const uniqueNumbers = new Set();
    while (uniqueNumbers.size < count) {
      const randomNumber = Math.floor(Math.random() * max);
      uniqueNumbers.add(randomNumber);
    }
    return uniqueNumbers;
  }

  function handleClick(event) {
    const { index } = event.target.dataset;
    const { isClicked } = championGroup[index];
    console.log(isClicked);
  }

  return (
    <main>
      {[...championGroup].map((champion, index) => {
        const { name, imageURL } = champion;
        return (
          <Card
            key={name}
            name={name}
            index={index}
            imageURL={imageURL}
            onClick={handleClick}
          />
        );
      })}
    </main>
  );
}

export default Game;
