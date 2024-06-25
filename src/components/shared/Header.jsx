import { Input } from "../ui/input";

const Header = () => {
    return (
        <div className="flex h-20 justify-between p-5">
            <div>resto</div>
            <div className="flex">
                <Input type="text" placeholder="Pesquise um jogo..." />
                <button>Filtrar</button>

            </div>
        </div>
    )
}

export default Header;