import { useState } from "react";
import img1 from "../../../assets/vector.png";
import img2 from "../../../assets/setinha.png";
import error from "../../../assets/error.png";
import almost from "../../../assets/almost.png";
import zap from "../../../assets/zap.png";
import { ClosedCard, OpenCard, Btn, Red, Yellow, Green } from "./style";

export const Card = ({ number, question, correctAnswer, callback }) => {
    const [cardOpen, setCardOpen] = useState(false)
    const [turnCard, setTurnCard] = useState(false)

    const [answer, setAnswer] = useState('')

    if (answer === 'red') {
        return (
            <ClosedCard>
                <Red>Pergunta {number}</Red>
                <img src={error} alt="error" />
            </ClosedCard>
        )
    }

    if (answer === 'yellow') {
        return (
            <ClosedCard>
                <Yellow>Pergunta {number}</Yellow>
                <img src={almost} alt="almost" />
            </ClosedCard>
        )
    }

    if (answer === 'green') {
        return (
            <ClosedCard>
                <Green>Pergunta {number}</Green>
                <img src={zap} alt="zap" />
            </ClosedCard>
        )
    }

    if (cardOpen === false) {
        return (
            <ClosedCard>
                <span>Pergunta {number}</span>
                <img onClick={() => { setCardOpen(true) }} src={img1} alt="seta" />
            </ClosedCard>
        )
    } else {
        return (
            <OpenCard>
                {turnCard === false ? (
                    <>
                        <span>{question}</span>
                        <img onClick={() => { setTurnCard(true) }} src={img2} alt="seta redonda" />
                    </>
                ) : (
                    <>
                        <span>{correctAnswer}</span>
                        <div>
                            <Btn onClick={() => {
                                setAnswer('red')
                                callback(error)
                            }}
                            >Não lembrei</Btn>
                            <Btn onClick={() => {
                                setAnswer('yellow')
                                callback(almost)
                            }}
                            >Quase não lembrei</Btn>
                            <Btn onClick={() => {
                                setAnswer('green')
                                callback(zap)
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