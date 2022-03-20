import error from "../../../assets/error.png";
import almost from "../../../assets/almost.png";
import zap from "../../../assets/zap.png";
import party from "../../../assets/party.png";
import sad from "../../../assets/sad.png";
import { FooterStyled } from "./style"
import { End } from "./End";

export const Footer = ({ done, cards, answers }) => {
    return (
        <FooterStyled >
            {done !== cards.length ?
                <>
                    <span>{done}/{cards.length} CONCLUÍDOS</span>
                    <div>
                        {answers.map((el, i) => <img key={i + 1} src={el} alt={el} />)}
                    </div>
                </> : (answers.includes(error) ?
                    <End
                        done={done}
                        cards={cards}
                        answers={answers}
                        src={sad}
                        msg={'Ainda faltaram alguns... Mas não desanime!'}
                    />
                    :
                    <End
                        done={done}
                        cards={cards}
                        answers={answers}
                        src={party}
                        msg={'Você não esqueceu de nenhum flashcard!'}
                    />
                )
            }
        </FooterStyled>
    )
}