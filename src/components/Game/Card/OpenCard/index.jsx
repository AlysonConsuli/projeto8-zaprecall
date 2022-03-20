import { useState } from "react";
import circle from "../../../../assets/setinha.png";
import { OpenCardStyled, Btn } from "./style";

export const OpenCard = ({ question, correctAnswer, fn1, fn2, fn3 }) => {
    const [turnCard, setTurnCard] = useState(false)

    return (
        <OpenCardStyled>
            {turnCard === false ? (
                <>
                    <span>{question}</span>
                    <img onClick={() => { setTurnCard(true) }} src={circle} alt="seta redonda" />
                </>
            ) : (
                <>
                    <span>{correctAnswer}</span>
                    <div>
                        <Btn onClick={fn1}>Não lembrei</Btn>
                        <Btn onClick={fn2}>Quase não lembrei</Btn>
                        <Btn onClick={fn3}>Zap!</Btn>
                    </div>
                </>
            )
            }
        </OpenCardStyled>
    )
}