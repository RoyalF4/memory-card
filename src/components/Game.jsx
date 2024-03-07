import Card from './Card';

const BOARD_SIZE = 6;

function Game({ championData }) {
  const NUMBER_OF_CHAMPIONS = Object.keys(championData).length;

  function generateRandomNumbers(max, count) {
    if (max !== 0) {
      const uniqueNumbers = new Set();
      console.log(max, count);
      while (uniqueNumbers.size < count) {
        const randomNumber = Math.floor(Math.random() * max);
        console.log(randomNumber);
        uniqueNumbers.add(randomNumber);
      }

      return uniqueNumbers;
    }
  }

  console.log(generateRandomNumbers(NUMBER_OF_CHAMPIONS, BOARD_SIZE));
  return <main></main>;
}

export default Game;
