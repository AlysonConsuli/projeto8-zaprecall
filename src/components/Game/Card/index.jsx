import { useState } from "react";
import img1 from "../../../assets/vector.png";
import img2 from "../../../assets/setinha.png";
import erro from "../../../assets/erro.png";
import duvida from "../../../assets/duvida.png";
import certo from "../../../assets/certo.png";
import { ClosedCard, OpenCard, Btn, Red, Yellow, Green } from "./style";

export const Card = ({ num, callback }) => {
    const [cardOpen, setCardOpen] = useState(false)
    const [turnCard, setTurnCard] = useState(false)

    const [answer, setAnswer] = useState('')

    if (answer === 'red') {
        return (
            <ClosedCard>
                <Red>Pergunta {num}</Red>
                <img src={erro} alt="erro" />
            </ClosedCard>
        )
    }

    if (answer === 'yellow') {
        return (
            <ClosedCard>
                <Yellow>Pergunta {num}</Yellow>
                <img src={duvida} alt="duvida" />
            </ClosedCard>
        )
    }

    if (answer === 'green') {
        return (
            <ClosedCard>
                <Green>Pergunta {num}</Green>
                <img src={certo} alt="certo" />
            </ClosedCard>
        )
    }

    if (cardOpen === false) {
        return (
            <ClosedCard>
                <span>Pergunta {num}</span>
                <img onClick={() => { setCardOpen(true) }} src={img1} alt="seta" />
            </ClosedCard>
        )
    } else {
        return (
            <OpenCard>
                {turnCard === false ? (
                    <>
                        <span>O que é JSX?</span>
                        <img onClick={() => { setTurnCard(true) }} src={img2} alt="seta redonda" />
                    </>
                ) : (
                    <>
                        <span>JSX é uma sintaxe para escrever HTML dentro do JS</span>
                        <div>
                            <Btn onClick={() => {
                                setAnswer('red')
                                callback()
                            }}
                            >Não lembrei</Btn>
                            <Btn onClick={() => {
                                setAnswer('yellow')
                                callback()
                            }}
                            >Quase não lembrei</Btn>
                            <Btn onClick={() => {
                                setAnswer('green')
                                callback()
                            }}
                            >Zap!</Btn>
                        </div>
                    </>
                )
                }
            </OpenCard>
        )
    }
}