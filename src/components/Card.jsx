import '../css/Card.css';
function Card({ name, imageURL, onClick, index }) {
  return (
    <button
      data-index={index}
      onClick={onClick}
      style={{ backgroundImage: `url(${imageURL})` }}
    >
      {name}
    </button>
  );
}

export default Card;
