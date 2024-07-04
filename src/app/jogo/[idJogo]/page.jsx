"use client"
import { useEffect,useState } from "react"
import "../styled.css"
import { games } from "@/constants"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown, faFlag, faExpand } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from "next/navigation"

const Jogo = ({ params }) => {
    const [jogo, setJogo] = useState();
    useEffect(()=>{
        const fitrados = games.find(game => {
            return game.id == params.idJogo
        })
        setJogo(fitrados)

    },[])

    const route = useRouter()

    return (
        <div className="container-geral">

            <div className="titulo">
                <h1>{jogo?.name}</h1>
            </div>

            <div className="flex game-container">

                <div className="w-4/6 tela-container">
                    <div className="telaJogo" style={{"backgroundImage": `url(${jogo?.largeImage})`}}></div>
                    <div className="interativos">

                        <h2>{jogo?.name}</h2>

                        <div className="icons">
                            <FontAwesomeIcon icon={faThumbsUp} className="icon" />
                            <FontAwesomeIcon icon={faFlag} className="icon" />
                            <FontAwesomeIcon icon={faThumbsDown} className="icon" />
                        </div>

                        <FontAwesomeIcon icon={faExpand} className="icon" />

                    </div>
                </div>

                <div className="info w-1/4">
                    <p>{jogo?.description}</p>

                    <div>
                        <button onClick={() => route.push("/")} >Voltar</button>
                    </div>
                </div>

            </div>

        </div>
    )
}
export default Jogo