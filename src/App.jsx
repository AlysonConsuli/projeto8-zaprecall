import { useState } from "react";
import { Enter } from "./components/Enter";
import { Game } from "./components/Game";


export const App = () => {
    const [game, setGame] = useState(false)

    return (
        <>
            {!game ? <Enter fn={() => setGame(true)} /> : <Game />}
        </>
    )
}