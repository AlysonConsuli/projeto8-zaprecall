import { EndStyled } from "./style"

export const End = ({ done, cards, answers, src, msg }) => {
    return (
        <EndStyled>
            <div>
                <img src={src} alt={src} />
                <h3>PUTZ!</h3>
            </div>
            <span>{msg}</span>
            <div className="block">
                <span>{done}/{cards.length} CONCLUÍDOS</span>
                <div>
                    {answers.map((el, i) => <img key={i + 1} src={el} alt={el} />)}
                </div>
            </div>
        </EndStyled>
    )
}