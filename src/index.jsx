import reactDom from "react-dom";
import { Enter } from "./components/enter";
import { Main } from "./components/main";

function App() {
    return (
        <>
            <Enter />
            <Main />
        </>
    )
}

const root = document.querySelector('.root')
reactDom.render(<App />, root)