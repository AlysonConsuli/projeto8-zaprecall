import error from "../../../../assets/error.png";
import almost from "../../../../assets/almost.png";
import zap from "../../../../assets/zap.png";
import { ClosedCardStyled } from "../ClosedCard/style";
import { RedLine, YellowLine, GreenLine } from "./style";

export const FinishedCardError = ({ number }) => {
    return (
        <ClosedCardStyled>
            <RedLine>Pergunta {number}</RedLine>
            <img src={error} alt="error" />
        </ClosedCardStyled>
    )
}

export const FinishedCardAlmost = ({ number }) => {
    return (
        <ClosedCardStyled>
            <YellowLine>Pergunta {number}</YellowLine>
            <img src={almost} alt="almost" />
        </ClosedCardStyled>
    )
}

export const FinishedCardZap = ({ number }) => {
    return (
        <ClosedCardStyled>
            <GreenLine>Pergunta {number}</GreenLine>
            <img src={zap} alt="zap" />
        </ClosedCardStyled>
    )
}