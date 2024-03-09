import '../css/Card.css';
function Card({ name, imageURL, onClick, index }) {
  return (
    <div className="card-container">
      <button
        data-index={index}
        onClick={onClick}
        style={{ backgroundImage: `url(${imageURL})` }}
      >
        {name}
      </button>
    </div>
  );
}

export default Card;
