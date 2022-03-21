import { useState } from "react";
import { GlobalStyle } from "./style";
import { Enter } from "./components/Enter";
import { Game } from "./components/Game";
import { getCards } from "./services/getCards"

export const App = () => {
    const [game, setGame] = useState(false)
    const [zapNumber, setZapNumber] = useState('')
    const [deck, setDeck] = useState('gerais')
    let cards = getCards(deck)

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
                /> : (zapNumber === '' || (zapNumber >= 1 && zapNumber <= cards.length) ?
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