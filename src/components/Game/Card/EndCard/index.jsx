import error from "../../../../assets/error.png";
import almost from "../../../../assets/almost.png";
import zap from "../../../../assets/zap.png";
import { ClosedCardStyled } from "../ClosedCard/style";
import { Red, Yellow, Green } from "./style";

export const EndCardRed = ({ number }) => {
    return (
        <ClosedCardStyled>
            <Red>Pergunta {number}</Red>
            <img src={error} alt="error" />
        </ClosedCardStyled>
    )
}

export const EndCardYellow = ({ number }) => {
    return (
        <ClosedCardStyled>
            <Yellow>Pergunta {number}</Yellow>
            <img src={almost} alt="almost" />
        </ClosedCardStyled>
    )
}

export const EndCardGreen = ({ number }) => {
    return (
        <ClosedCardStyled>
            <Green>Pergunta {number}</Green>
            <img src={zap} alt="zap" />
        </ClosedCardStyled>
    )
}