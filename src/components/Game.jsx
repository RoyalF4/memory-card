import Card from './Card';

const BOARD_SIZE = 6;

function Game({ championData }) {
  const NUMBER_OF_CHAMPIONS = Object.keys(championData).length;
  console.log('game component');
  function generateRandomNumbers(max, count) {
    // if data hasnt loaded yet
    if (max !== 0) {
      const uniqueNumbers = new Set();
      while (uniqueNumbers.size < count) {
        const randomNumber = Math.floor(Math.random() * max);
        console.log(randomNumber);
        uniqueNumbers.add(randomNumber);
      }

      return uniqueNumbers;
    }
  }

  const championIndex = generateRandomNumbers(NUMBER_OF_CHAMPIONS, BOARD_SIZE);

  return (
    <main>
      {[...championIndex].map((index) => {
        const { name, imageURL } = championData[index];
        return <Card key={index} name={name} imageURL={imageURL} />;
      })}
    </main>
  );
}

export default Game;
