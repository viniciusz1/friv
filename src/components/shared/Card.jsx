const Card = ({ name, image}) => {

  return (

    <li className="w-1/4 bg-violet-900" >
        <div >
          <img src={image} alt={name} />
        </div>
        <div className="p-5 text-white flex flex-col gap-5">
          <h3>{name}</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
    </li>
  );
};


export default Card;
