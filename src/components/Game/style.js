import styled from "styled-components";

export const Deck = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    span {
        font-weight: 700;
        font-size: 16px;
        color: #333333;
    }

    img{
        cursor: pointer;
    }

    @media (min-width: 1100px) {
        span{
            font-size: 24px;
        }
    }
`