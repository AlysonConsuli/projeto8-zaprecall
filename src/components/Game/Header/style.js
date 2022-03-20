import styled from "styled-components";

export const HeaderStyled = styled.header`
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