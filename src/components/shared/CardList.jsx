import Card from "./Card";
import { games } from "@/constants";


const CardList = () => {

  return (
      <ul className="container flex flex-wrap w-screen gap-10 justify-center">
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
