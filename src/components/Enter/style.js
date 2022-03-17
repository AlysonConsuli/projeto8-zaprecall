import styled from "styled-components";

export const EntryScreen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 90px;

    h1 {
    font-family: 'Righteous';
    font-size: 25px;
    color: #FFFFFF;
    margin-top: 6px;
    margin-bottom: 75px;
    }

    button {
        width: 141px;
        height: 31px;
        border: solid 1px #FB6B6B;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        background: #FFFFFF;
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        cursor: pointer;
    }

    span {
        font-size: 12px;
        text-align: center;
        color: #D70900;
    }
`