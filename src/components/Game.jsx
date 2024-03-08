import '../css/main.css';
import Card from './Card';
import Modal, { toggleModal } from './Modal';
import { useState } from 'react';

function Game({ championData, handleScore, score, board_size }) {
  const [championGroup, setChampionGroup] = useState(getChampionGroup());
  const [modalInfo, setModalInfo] = useState({});

  function getChampionGroup() {
    const indexSet = generateRandomNumbers(championData.length, board_size);
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
      setModalInfo({
        imgURL: './src/assets/LoL-Defeat.png',
        alt: 'Defeat',
      });
      toggleModal('modal');
      //setChampionGroup(getChampionGroup());
    } else if (score === board_size - 1) {
      setModalInfo({
        imgURL: './src/assets/LoL-Victory.png',
        alt: 'Victory',
      });
      toggleModal('modal', 'Victory');
      //setChampionGroup(getChampionGroup());
    } else {
      championGroup[index].isClicked = true;
      setChampionGroup([...shuffleArray(championGroup)]);
    }
    handleScore(isClicked);
  }

  function handleRestart() {
    setChampionGroup(getChampionGroup());
    toggleModal('modal');
  }

  return (
    <main>
      <Modal label={'modal'} info={modalInfo} onRestart={handleRestart} />
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
