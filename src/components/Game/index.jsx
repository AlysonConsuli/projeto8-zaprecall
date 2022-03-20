import { useState } from "react";
import { Deck } from "./style";
import { Card } from "./Card"
import { Header } from "./Header"
import { Footer } from "./Footer"

const cards = [
    { question: 'Quem é o personagem mais forte do MCU?', correctAnswer: 'Dr. Strange' },
    { question: '77 + 33 = ?', correctAnswer: '110' }/*,
    { question: 'Qual melhor curso de programação do Brasil?', correctAnswer: 'Driven' },
    { question: 'Qual teoria famosa foi formulada por Einstein', correctAnswer: 'Teoria da Relatividade' },
    { question: 'Em qual continente ocorrerá a Copa de 2026?', correctAnswer: 'América do Norte' },
    { question: 'Quem é conhecido como bruxo no futebol?', correctAnswer: 'Ronaldinho Gaúcho' },
    { question: 'Quem nasce no Espírito Santo é?', correctAnswer: 'Capixaba' },
    { question: 'Pq é difícil ser o Neymar?', correctAnswer: 'Um dia saberemos' }*/
]
cards.sort(() => Math.random() - 0.5)

export const Game = () => {
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
            <Footer done={done} cards={cards} answers={answers} />
        </>
    )
}