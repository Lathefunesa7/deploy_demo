function Card(props) {
  return (
    <div>
      <h2>{props.name}</h2>
      <p>{props.course}</p>
    </div>
  );
}

export default Card;
