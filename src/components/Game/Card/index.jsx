import img from "../../../assets/vector.png";
import { CardStyled } from "./style";

export const Card = ({ num, fn }) => {
    return (
        <CardStyled>
            <span>Pergunta {num}</span>
            <img onClick={fn} src={img} alt="seta" />
        </CardStyled>
    )
}