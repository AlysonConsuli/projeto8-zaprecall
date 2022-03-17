import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 8px;
    height: 86px;
    position: sticky;
    z-index: 1;
    top: 0;
    background-color: #FB6B6B;

    h1 {
        font-family: 'Righteous';
        font-size: 20px;
        color: #FFFFFF;
    }
`

export const Deck = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5px;
    padding-bottom: 71px;

    span {
        font-weight: 700;
        font-size: 12px;
        color: #333333;
    }

    img{
        cursor: pointer;
    }
`

export const Footer = styled.footer`
    width: 100%;
    height: 50px;
    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    z-index: 1;
    left: 0;
    bottom: 0;

    span {
        font-size: 12px;
        color: #333333;
    }
`