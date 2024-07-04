// components/shared/CardList.js
'use client';

import Card from "../Card";
import './styled.css'
import { useGames } from "@/context/GamesContext";

const CardList = () => {
  const { filteredGames } = useGames();

  return (
    <ul className="card-container">
      {filteredGames.length > 0 ? (
        filteredGames.map((game, index) => (
          <Card key={index} name={game.name} image={game.image} id={game.id} />
        ))
      ) : (
        <li>Nenhum jogo encontrado</li>
      )}
    </ul>
  );
};

export default CardList;
