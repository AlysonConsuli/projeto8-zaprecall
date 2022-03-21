import error from "../../../assets/error.png";
import almost from "../../../assets/almost.png";
import zap from "../../../assets/zap.png";
import party from "../../../assets/party.png";
import sad from "../../../assets/sad.png";
import { FooterStyled } from "./style"
import { EndGameMessage } from "./EndGameMessage";

export const Footer = ({ done, cards, answers, restart, zapNumber }) => {
    const propsError = {
        src: sad,
        title: 'PUTZ...',
        msg: 'Ainda faltaram alguns... Mas não desanime!',
        done: done,
        cards: cards,
        answers: answers,
        restart: restart
    }
    const propsSuccess = {
        src: party,
        title: 'Parabéns!',
        msg: 'Você não esqueceu de nenhum flashcard!',
        done: done,
        cards: cards,
        answers: answers,
        restart: restart
    }

    if (done !== cards.length) {
        return (
            <FooterStyled >
                <span>{done}/{cards.length} CONCLUÍDOS</span>
                <div>
                    {answers.map((el, i) => <img key={i + 1} src={el} alt={el} />)}
                </div>
            </FooterStyled>
        )
    }
    if ((zapNumber === '' && answers.includes(error)) ||
        (answers.filter(el => el === zap)).length < zapNumber) {
        return (
            <FooterStyled >
                <EndGameMessage {...propsError} />
            </FooterStyled>
        )
    }
    return (
        <FooterStyled >
            <EndGameMessage {...propsSuccess} />
        </FooterStyled>
    )
}