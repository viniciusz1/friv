"use client"
import { createContext, useState, useContext } from 'react';

const GamesContext = createContext();

export const GamesProvider = ({ children }) => {
  const [filteredGames, setFilteredGames] = useState([]);

  return (
    <GamesContext.Provider value={{ filteredGames, setFilteredGames }}>
      {children}
    </GamesContext.Provider>
  );
};

export const useGames = () => useContext(GamesContext);