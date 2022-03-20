import styled from "styled-components";

export const EndStyled = styled.div`
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