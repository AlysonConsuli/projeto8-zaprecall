import { useState } from "react";
import img from "../../assets/logo-pequeno.png";
import error from "../../assets/error.png";
import almost from "../../assets/almost.png";
import zap from "../../assets/zap.png";
import party from "../../assets/party.png";
import sad from "../../assets/sad.png";
import { Deck, End, Footer, Header } from "./style";
import { Card } from "./Card"

const cards = [
    { question: 'Quem é o personagem mais forte do MCU?', correctAnswer: 'Dr. Strange' },
    { question: '77 + 33 = ?', correctAnswer: '110' }/*,
    { question: 'Qual melhor curso de programação do Brasil?', correctAnswer: 'Driven' },
    { question: 'Qual teoria foi formulada por Einstein', correctAnswer: 'Teoria da Relatividade' },
    { question: 'Em qual continente ocorrerá a Copa de 2026?', correctAnswer: 'América do Norte' },
    { question: 'Quem é conhecido como bruxo no futebol?', correctAnswer: 'Ronaldinho Gaúcho' },
    { question: 'Quem nasce no Espírito Santo é?', correctAnswer: 'Capixaba' },
    { question: 'Pq é difícil ser o Neymar?', correctAnswer: 'Um dia vamos saber' }*/
]
cards.sort(() => Math.random() - 0.5)

export const Game = () => {

    const [done, setDone] = useState(0)
    const [answers, setAnswers] = useState([])

    return (
        <>
            <Header>
                <img src={img} alt="logo" />
                <h1>ZapRecall</h1>
            </Header>
            <Deck>
                {cards.map((card, i) => {
                    return <Card key={i + 1} number={i + 1} {...card} callback={(value) => {
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
                            {answers.map((el,i) => {
                                return (<img key={i+1} src={el} alt={el} />)
                            })}
                        </div>
                    </> : answers.includes(error) ?
                        <End>
                            <div>
                                <img src={sad} alt='sad' />
                                <h3>PUTZ!</h3>
                            </div>
                            <span>Ainda faltaram alguns... Mas não desanime!</span>
                            <div className="block">
                                <span>{done}/{cards.length} CONCLUÍDOS</span>
                                <div>
                                    {answers.map((el,i) => {
                                        return (<img key={i+1} src={el} alt={el} />)
                                    })}
                                </div>
                            </div>
                        </End> :
                        <End>
                            <div>
                                <img src={party} alt='party' />
                                <h3>PARABÉNS!</h3>
                            </div>
                            <span>Você não esqueceu de nenhum flashcard!</span>
                            <div className="block">
                                <span>{done}/{cards.length} CONCLUÍDOS</span>
                                <div>
                                    {answers.map((el,i) => {
                                        return (<img key={i+1} src={el} alt={el} />)
                                    })}
                                </div>
                            </div>
                        </End>
                }
            </Footer>
        </>
    )
}