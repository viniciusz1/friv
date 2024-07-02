import { Input } from "../ui/input";
import AutocompleteJogo from "../shared/Autocomplete/Autocomplete";
const Header = () => {
    return (
        <div className="flex h-20 justify-between p-5" style={{backgroundColor: "purple"}}>
            <div>
                <img width={'60px'} src="../logofriv-removebg-preview.png" alt="" />
            </div>
            <div className="flex">
                <AutocompleteJogo type="text" placeholder="Pesquise um jogo..." />
                <button>Filtrar</button>

            </div>
        </div>
    )
}

export default Header;