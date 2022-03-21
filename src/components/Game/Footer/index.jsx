import error from "../../../assets/error.png";
import almost from "../../../assets/almost.png";
import zap from "../../../assets/zap.png";
import party from "../../../assets/party.png";
import sad from "../../../assets/sad.png";
import { FooterStyled } from "./style"
import { End } from "./End";

export const Footer = ({ done, cards, answers, restart, zapNumber }) => {
    return (
        <FooterStyled >
            {done !== cards.length ?
                <>
                    <span>{done}/{cards.length} CONCLUÍDOS</span>
                    <div>
                        {answers.map((el, i) => <img key={i + 1} src={el} alt={el} />)}
                    </div>
                </> : ( (zapNumber === '' && answers.includes(error)) || (answers.filter(el => el === zap)).length < zapNumber ?
                    <End
                        done={done}
                        cards={cards}
                        answers={answers}
                        src={sad}
                        title={'PUTZ...'}
                        msg={'Ainda faltaram alguns... Mas não desanime!'}
                        restart={restart}
                    />
                    :
                    <End
                        done={done}
                        cards={cards}
                        answers={answers}
                        src={party}
                        title={'Parabéns!'}
                        msg={'Você não esqueceu de nenhum flashcard!'}
                        restart={restart}
                    />
                )
            }
        </FooterStyled>
    )
}