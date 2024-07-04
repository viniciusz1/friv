// components/shared/Header.js
'use client';

import { Input } from "../ui/input";
import AutocompleteJogo from "../shared/Autocomplete/Autocomplete";
import { useRouter } from "next/navigation";
import { useGames } from "@/context/GamesContext";
import { games } from "@/constants";
import { useEffect } from "react";

const Header = () => {
  const { setFilteredGames } = useGames();

    useEffect(() => {
    setFilteredGames(games);
    },[])

  const route = useRouter();

  const handleSearch = (event, value) => {
    if (value) {
      const filtered = games.filter((game) =>
        game.name.toLowerCase().includes(value.name.toLowerCase())
      );
      setFilteredGames(filtered);
    } else {
      setFilteredGames(games);
    }
  };

  return (
    <div className="flex h-20 justify-between p-5" style={{ backgroundColor: "purple" }}>
      <div style={{ overflow: "hidden", cursor: "pointer" }}>
        <img width={'60px'} src="../logofriv-removebg-preview.png" alt="logo" onClick={() => route.push("/")} />
      </div>
      <div className="flex">
        <AutocompleteJogo onInputChange={handleSearch} />
      </div>
    </div>
  );
};

export default Header;
