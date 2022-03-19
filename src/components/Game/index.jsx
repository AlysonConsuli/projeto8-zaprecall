import { useState } from "react";
import img from "../../assets/logo-pequeno.png";
import error from "../../assets/error.png";
import almost from "../../assets/almost.png";
import zap from "../../assets/zap.png";
import party from "../../assets/party.png";
import sad from "../../assets/sad.png";
import { Deck, End, Footer, Header } from "./style";
import { Card } from "./Card"

export const Game = () => {
    const cards = [
        { number: 1, question: 'Quem é o personagem mais forte do MCU?', correctAnswer: 'Dr. Strange'},
        { number: 2, question: '77 + 33 = ?', correctAnswer: '110'}, 
        { number: 3, question: 'Qual melhor curso de programação do Brasil?', correctAnswer: 'Driven'}, 
        { number: 4, question: 'Qual teoria foi formulada por Einstein', correctAnswer: 'Teoria da Relatividade'}, 
        { number: 5, question: 'Em qual continente ocorrerá a Copa de 2026?', correctAnswer: 'América do Norte'}, 
        { number: 6, question: 'Quem é conhecido como bruxo no futebol?', correctAnswer: 'Ronaldinho Gaúcho'}, 
        { number: 7, question: 'Quem nasce no Espírito Santo é?', correctAnswer: 'Capixaba'}, 
        { number: 8, question: 'Pq é difícil ser o Neymar?', correctAnswer: 'Um dia vamos saber' }
    ]

    const [done, setDone] = useState(0)

    const [answers, setAnswers] = useState([])

    return (
        <>
            <Header>
                <img src={img} alt="logo" />
                <h1>ZapRecall</h1>
            </Header>
            <Deck>
                {cards.map(card => {
                    return <Card {...card} callback={(value) => {
                        setDone(done + 1)
                        setAnswers([...answers, value])
                    }} />
                })
                }
            </Deck>
            <Footer>
                {done !== cards.length ?
                    <>
                        <span>{done}/{cards.length} CONCLUÍDOS</span>
                        <div>
                            {answers.map(el => {
                                return (<img src={el} alt={el} />)
                            })}
                        </div>
                    </> : answers.includes(error) ?
                        <End>
                            <div>
                                <img src={sad} alt='sad' />
                                <h3>PUTZ!</h3>
                            </div>
                            <span>Ainda faltaram alguns... Mas não desanime!</span>
                            <div>
                                {answers.map(el => {
                                    return (<img src={el} alt={el} />)
                                })}
                            </div>
                        </End> :
                        <End>
                            <div>
                                <img src={party} alt='party' />
                                <h3>PARABÉNS!</h3>
                            </div>
                            <span>Você não esqueceu de nenhum flashcard!</span>
                            <div>
                                {answers.map(el => {
                                    return (<img src={el} alt={el} />)
                                })}
                            </div>
                        </End>
                }
            </Footer>
        </>
    )
}