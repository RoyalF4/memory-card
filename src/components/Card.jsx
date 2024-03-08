import '../css/Card.css';
function Card({ name, imageURL }) {
  return (
    <div className="card">
      <img src={imageURL} alt="" />
      {name}
    </div>
  );
}

export default Card;
