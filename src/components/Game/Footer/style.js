import styled from "styled-components";

export const FooterStyled = styled.footer`
    width: 100%;
    min-height: 70px;
    background-color: #FFFFFF;
    box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    position: sticky;
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