import { useState } from "react";
import img from "../../assets/logo-pequeno.png";
import { Deck, Footer, Header } from "./style";
import { Card } from "./Card"

export const Game = () => {
    const numeros = [{ num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }, { num: 5 }, { num: 6 }, { num: 7 }, { num: 8 }]

    const [cardOpen, setCardOpen] = useState(false)

    return (
        <>
            <Header>
                <img src={img} alt="logo" />
                <h1>ZapRecall</h1>
            </Header>
            <Deck>
                {numeros.map(numero => {
                    return !cardOpen ? <Card {...numero} fn={() => setCardOpen(true)} /> : ''
                }
                )}
            </Deck>
            <Footer>
                <span>0/4 CONCLUÍDOS</span>
            </Footer>
        </>
    )
}