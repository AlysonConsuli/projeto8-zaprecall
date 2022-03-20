import styled from "styled-components";

export const Header = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 22px;
    height: 120px;
    position: sticky;
    z-index: 1;
    top: 0;
    background-color: #FB6B6B;

    h1 {
        font-family: 'Righteous';
        font-size: 36px;
        color: #FFFFFF;
    }

    @media (min-width: 1100px) {
        height: 180px;
        gap: 42px;

        h1 {
            font-size: 64px;   
        }

        img{
            height: 100px;
        }
    }
`

export const Deck = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-bottom: 70px;

    span {
        font-weight: 700;
        font-size: 16px;
        color: #333333;
    }

    img{
        cursor: pointer;
    }

    @media (min-width: 1100px) {
        padding-bottom: 118px;

        span{
            font-size: 24px;
        }
    }
`

export const Footer = styled.footer`
    width: 100%;
    min-height: 70px;
    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    position: fixed;
    z-index: 1;
    left: 0;
    bottom: 0;

    span {
        font-size: 18px;
        color: #333333;
    }

    div{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 5px;
    }

    h3{
        font-size: 18px;
        font-weight: 700;
        color: #333333;
    }

    @media(min-width: 1100px){
        min-height: 118px;

        span {
            font-size: 32px;
        }

        div{
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 10px;
        }

        h3{
            font-size: 32px;
        }

        img{
            width: 32px;
            height: 32px;
        }
    }
`

export const End = styled.div`
    min-height: 171px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px !important;
    padding: 16px 0;

    span{
        text-align: center;
        width: 222px;
    }

    .block{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 6px;
    }

    @media(min-width: 1100px){
        min-height: 210px;

        span {
            width: 385px;
        }

        img{
            width: 32px;
            height: 32px;
        }
    }
`