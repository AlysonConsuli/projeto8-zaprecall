import { useState } from "react";
import { GlobalStyle } from "./style";
import { Enter } from "./components/Enter";
import { Game } from "./components/Game";
import { getCards } from "./services/getCards"

export const App = () => {
    const [game, setGame] = useState(false)
    const [zapNumber, setZapNumber] = useState('')
    const [deck, setDeck] = useState('gerais')

    function startGame() {
        if ((zapNumber >= 1 && zapNumber <= getCards(deck).length) || zapNumber === '') {
            return setGame(true)
        }
        alert('Insira número válido de zaps')
    }

    return (
        <>
            <GlobalStyle />
            {!game && <Enter
                startGame={startGame}
                zapNumber={zapNumber}
                callbackZap={(e) => setZapNumber(e.target.value)}
                deck={deck}
                callbackDeck={(e) => setDeck(e.target.value)}
            />}
            {game && <Game
                restart={() => setGame(false)}
                zapNumber={zapNumber}
                cards={getCards(deck)}
            />}
        </>
    )
}