import { Card } from "./card"

export const Main = () => {
    const numeros = [{ num: 1 }, { num: 2 }, { num: 3 }, { num: 4 }]
    return (
        <>
            <header>
                <img src="img/logo-pequeno.png" alt="logo" />
                <h1>ZapRecall</h1>
            </header>
            <main>
                {numeros.map(numero => <Card {...numero} />)}
            </main>
            <footer>
                <span>0/4 CONCLUÍDOS</span>
            </footer>
        </>
    )
}