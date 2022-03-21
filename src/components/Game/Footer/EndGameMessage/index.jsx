import { EndMessage } from "./style"

export const EndGameMessage = ({ done, cards, answers, src, title, msg, restart }) => {
    return (
        <EndMessage>
            <div>
                <img src={src} alt={src} />
                <h3>{title}</h3>
            </div>
            <span>{msg}</span>
            <div className="block">
                <span>{done}/{cards.length} CONCLUÍDOS</span>
                <div>
                    {answers.map((el, i) => <img key={i + 1} src={el} alt={el} />)}
                </div>
            </div>
            <button onClick={restart}>
                <span>REINICIAR RECALL</span>
            </button>
        </EndMessage>
    )
}