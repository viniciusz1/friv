"use client"
import { useEffect } from "react"
import "../styled.css"

const Jogo = ({ idProjeto }) => {
    useEffect(()=>{
        console.log(idProjeto)
    },[])
    return (
        <>
            <div className="geral">
                <h1 className="titulo">Jogo</h1>
                <div className="flex coisas">
                    <div className="w-3/4 tudo">
                        <div className="telaJogo">TELA BOA TARDE</div>
                        <div className="interativos">botao</div>
                    </div>
                    <div className="info w-1/4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam, voluptate temporibus. Laborum, temporibus omnis dicta odio eius et possimus quibusdam, libero voluptatibus quis quam est cumque atque at error. Itaque!</div>

                </div>
            </div>
        </>)
}
export default Jogo