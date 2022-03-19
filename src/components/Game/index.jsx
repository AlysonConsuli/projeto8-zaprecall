import { useState } from "react";
import img from "../../assets/logo-pequeno.png";
import { Deck, Footer, Header } from "./style";
import { Card } from "./Card"

export const Game = () => {
    const numeros = [{ num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }, { num: 5 }, { num: 6 }, { num: 7 }, { num: 8 }]

    const [done, setDone] = useState(0)

    const [answers, setAnswers] = useState([])

    return (
        <>
            <Header>
                <img src={img} alt="logo" />
                <h1>ZapRecall</h1>
            </Header>
            <Deck>
                {numeros.map(numero => {
                    return <Card {...numero} callback={() => setDone(done+1)} />
                })
                }
            </Deck>
            <Footer>
                <span>{done}/{numeros.length} CONCLUÍDOS</span>
            </Footer>
        </>
    )
}