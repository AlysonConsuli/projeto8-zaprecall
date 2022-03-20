import { useState } from "react";
import { GlobalStyle } from "./style";
import { Enter } from "./components/Enter";
import { Game } from "./components/Game";


export const App = () => {
    const [game, setGame] = useState(false)

    return (
        <>
            <GlobalStyle />
            {!game ? <Enter fn={() => setGame(true)} /> : <Game />}
        </>
    )
}