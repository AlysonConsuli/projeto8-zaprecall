import { useState } from "react";
import { Deck } from "./style";
import { Card } from "./Card"
import { Header } from "./Header"
import { Footer } from "./Footer"

export const Game = ({ restart, zapNumber, cards }) => {
    const [done, setDone] = useState(0)
    const [answers, setAnswers] = useState([])

    return (
        <>
            <Header />
            <Deck>
                {cards.map((card, i) => {
                    return <Card {...card} key={i + 1} number={i + 1}
                        callback={(value) => {
                            setDone(done + 1)
                            setAnswers([...answers, value])
                        }}
                    />
                })
                }
            </Deck>
            <Footer done={done} cards={cards} answers={answers} restart={restart} zapNumber={zapNumber} />
        </>
    )
}