import Card from "../Card";
import { games } from "@/constants";
import './styled.css'


const CardList = () => {

  return (
      <ul className="card-container">
        {games.length > 0 ? (
          games.map((game, index) => (
            <Card key={index} name={game.name} image={game.image} />
          ))
        ) : (
          <li>Nenhum jogo encontrado</li>
        )}
      </ul>
  );
};

export default CardList;
