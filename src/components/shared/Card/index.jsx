import './styled.css'
const Card = ({ name, image}) => {

  return (

    <li className="item" >
        <div>
          <img src={image} alt={name} className='game-img' />
        </div>
        <div className='game-info'>
          <h3>{name}</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit voluptates magni exercitationem ducimus nihil accusamus porro sunt nisi!</p>
        </div>
    </li>
  );
};


export default Card;
