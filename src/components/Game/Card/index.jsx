import { useState } from "react";
import error from "../../../assets/error.png";
import almost from "../../../assets/almost.png";
import zap from "../../../assets/zap.png";
import { OpenCard } from "./OpenCard";
import { ClosedCard } from "./ClosedCard";
import { EndCardRed, EndCardYellow, EndCardGreen } from "./EndCard";

export const Card = ({ number, question, correctAnswer, callback }) => {
    const [cardOpen, setCardOpen] = useState(false)
    const [answer, setAnswer] = useState('')

    function fn(color, status) {
        setAnswer(color)
        callback(status)
    }

    if (answer === 'red') { return <EndCardRed number={number} /> }
    if (answer === 'yellow') { return <EndCardYellow number={number} /> }
    if (answer === 'green') { return <EndCardGreen number={number} /> }

    if (cardOpen === false) {
        return (<ClosedCard number={number} fn={() => { setCardOpen(true) }} />)
    } else {
        return (
            <OpenCard
                question={question}
                correctAnswer={correctAnswer}
                fn1={() => { fn('red', error) }}
                fn2={() => { fn('yellow', almost) }}
                fn3={() => { fn('green', zap) }}
            />
        )
    }
}