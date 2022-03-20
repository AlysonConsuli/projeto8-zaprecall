import logo from "../../../assets/logo-pequeno.png";
import { HeaderStyled } from "./style";

export const Header = () => {
    return (
        <HeaderStyled>
            <img src={logo} alt="logo" />
            <h1>ZapRecall</h1>
        </HeaderStyled>
    )
}