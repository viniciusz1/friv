"use client"

import { Input } from "../ui/input";
import AutocompleteJogo from "../shared/Autocomplete/Autocomplete";
import { useRouter } from "next/navigation";
const Header = () => {

    const route = useRouter();

    return (
        <div className="flex h-20 justify-between p-5" style={{backgroundColor: "purple"}}>
            <div style={{overflow: "hidden", cursor: "pointer"}}>
                <img width={'60px'} src="../logofriv-removebg-preview.png" alt="logo" onClick={() => route.push("/")} />
            </div>
            <div className="flex">
                <AutocompleteJogo type="text" placeholder="Pesquise um jogo..." />
                <button>Filtrar</button>
            </div>
        </div>
    )
}

export default Header;