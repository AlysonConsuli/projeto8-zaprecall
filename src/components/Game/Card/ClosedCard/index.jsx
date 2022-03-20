import vector from "../../../../assets/vector.png";
import { ClosedCardStyled } from "./style";

export const ClosedCard = ({number, fn}) => {
    return (
        <ClosedCardStyled>
            <span>Pergunta {number}</span>
            <img onClick={fn} src={vector} alt="seta" />
        </ClosedCardStyled>
    )
}