function Card({ name, imageURL }) {
  return (
    <div>
      <img src={imageURL} alt="" />
      {name}
    </div>
  );
}

export default Card;
