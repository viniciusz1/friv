import './styled.css'
const Card = ({ name, image}) => {

  return (

    <li className="item" >
        <div>
          <img src={image} alt={name} />
        </div>
        <div>
          <h3>{name}</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </li>
  );
};


export default Card;
