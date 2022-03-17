import img from "../../assets/logo.png";
import { EntryScreen } from "./style.js"

export const Enter = ({fn}) => {
    return (
        <EntryScreen>
            <img src={img} alt="logo" />
            <h1>ZapRecall</h1>
            <button onClick={fn}>
                <span>Iniciar Recall!</span>
            </button>
        </EntryScreen>
    )
}