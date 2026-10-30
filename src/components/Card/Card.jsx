import "./Card.css";

function Card({ title, description, children }) {
  return (
    <div className="tm-card">
      <h3>{title}</h3>
      <p>{description}</p>
      {children}
    </div>
  );
}

export default Card;