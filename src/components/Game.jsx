import '../css/main.css';
import Card from './Card';
import { useState } from 'react';

const BOARD_SIZE = 10;

function Game({ championData, handleScore }) {
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

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function handleClick(event) {
    const { index } = event.target.dataset;
    const { isClicked } = championGroup[index];
    if (isClicked) {
      setChampionGroup(getChampionGroup());
    } else {
      championGroup[index].isClicked = true;
      setChampionGroup([...shuffleArray(championGroup)]);
    }
    handleScore(isClicked);
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
