import './card.css'

const Card = ({ name, imageUrl, action }) => {
  return (
    <div 
        onClick={action}
        className="card starwars-card"
    >
    
      <img src={imageUrl} alt={name} className="card-img-top" />
      <div className="card-body">
        <h5 className="card-title text-center">{name}</h5>
      </div>
    </div>
  );
};

export default Card;