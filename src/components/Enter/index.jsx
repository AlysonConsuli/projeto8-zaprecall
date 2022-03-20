import logo from "../../assets/logo.png";
import { EntryScreen } from "./style.js"

export const Enter = ({ startGame, zapNumber, callbackZap, deck, callbackDeck }) => {

    return (
        <EntryScreen>
            <img src={logo} alt="logo" />
            <h1>ZapRecall</h1>
            <select onChange={callbackDeck} value={deck} >
                <option value='gerais'>gerais</option>
                <option value='marvel'>marvel</option>
            </select>
            <input
                type='number' placeholder='Digite sua meta de zaps...' min='1'
                value={zapNumber}
                onChange={callbackZap}
            />
            <button onClick={startGame}>
                <span>Iniciar Recall!</span>
            </button>
        </EntryScreen>
    )
}