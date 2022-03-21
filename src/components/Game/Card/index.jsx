import { useState } from "react";
import error from "../../../assets/error.png";
import almost from "../../../assets/almost.png";
import zap from "../../../assets/zap.png";
import { OpenCard } from "./OpenCard";
import { ClosedCard } from "./ClosedCard";
import { FinishedCardError, FinishedCardAlmost, FinishedCardZap } from "./FinishedCard";

export const Card = ({ number, question, correctAnswer, callback }) => {
    const [cardOpen, setCardOpen] = useState(false)
    const [answer, setAnswer] = useState('')

    function fn(color, status) {
        setAnswer(color)
        callback(status)
    }

    if (answer === 'red') { return <FinishedCardError number={number} /> }
    if (answer === 'yellow') { return <FinishedCardAlmost number={number} /> }
    if (answer === 'green') { return <FinishedCardZap number={number} /> }

    if (!cardOpen) {
        return (<ClosedCard number={number} fn={() => { setCardOpen(true) }} />)
    }
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