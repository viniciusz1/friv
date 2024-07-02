"use client"
import { useEffect,useState } from "react"
import "../styled.css"
import { games } from "@/constants"

const Jogo = ({ params }) => {
    const [jogo, setJogo] = useState();
    useEffect(()=>{
        const fitrados = games.find(game => {
            return game.id == params.idJogo
        })
        setJogo(fitrados)

    },[])
    return (
        <>
            <div className="geral">
                <h1 className="titulo">{jogo?.name}</h1>
                <div className="flex coisas">
                    <div className="w-3/4 tudo">
                        <div className="telaJogo" style={{"backgroundImage": `url(${jogo?.largeImage})`}}></div>
                        <div className="interativos">botao</div>
                    </div>
                    <div className="info w-1/4">{jogo?.description}</div>

                </div>
            </div>
        </>)
}
export default Jogo