import { useState } from "react";
import { GlobalStyle } from "./style";
import { Enter } from "./components/Enter";
import { Game } from "./components/Game";

let cards = []
export const App = () => {
    const [game, setGame] = useState(false)
    const [zapNumber, setZapNumber] = useState('')
    const [deck, setDeck] = useState('gerais')

    if (deck === 'gerais') {
        cards = [
            { question: 'Em qual continente ocorrerá a Copa de 2026?', correctAnswer: 'América do Norte' },
            { question: 'limite de 1/x com x tendendo ao infinito é? = ?', correctAnswer: '0' },
            { question: 'Qual melhor curso de programação do Brasil?', correctAnswer: 'Driven' },
            { question: 'Qual descoberta fez o Einstein ganhar o seu nobel de física?', correctAnswer: 'Efeito fotoelétrico' },
            { question: 'Qual a gravidade da Terra?', correctAnswer: '9,8 m/s²' },
            { question: 'Quem é conhecido como bruxo no futebol?', correctAnswer: 'Ronaldinho Gaúcho' },
            { question: 'Quem nasce no Espírito Santo é?', correctAnswer: 'Capixaba' },
            { question: 'Pq é difícil ser o Neymar?', correctAnswer: 'Um dia saberemos' }
        ]
    } if (deck === 'marvel') {
        cards = [
            { question: 'Quem é o personagem mais forte do MCU?', correctAnswer: 'Dr. Strange' },
            { question: 'Qual o nome do Demolidor?', correctAnswer: 'Matt Murdock' },
            { question: 'Qual foi o primeiro gibi da Marvel publicado?', correctAnswer: 'O tocha humana' },
            { question: 'Quem na Marvel é equivalente ao Aquaman?', correctAnswer: 'Namor' },
            { question: 'Qual é o melhor filme da Marvel?', correctAnswer: 'Vingadores Guerra Infinita' },
            { question: 'Quem pode fazer isso o dia todo?', correctAnswer: 'Capitão América' },
            { question: 'Qual é a versão mais forte do Hulk?', correctAnswer: 'Imortal Hulk' },
            { question: 'Pq a roupa do deadpool é vermelha?', correctAnswer: 'Pela alta quantidade de sangue que cai na roupa dele' }
        ]
    }
    cards.sort(() => Math.random() - 0.5)

    return (
        <>
            <GlobalStyle />
            {!game ?
                <Enter
                    startGame={() => setGame(true)}
                    zapNumber={zapNumber}
                    callbackZap={(e) => setZapNumber(e.target.value)}
                    deck={deck}
                    callbackDeck={(e) => setDeck(e.target.value)}
                /> : (zapNumber >= 1 && zapNumber <= cards.length ?
                    <Game
                        restart={() => setGame(false)}
                        zapNumber={zapNumber}
                        cards={cards}
                    /> :
                    <>
                        {alert('Insira um número válido de zaps')}
                        {setGame(false)}
                    </>
                )
            }
        </>
    )
}