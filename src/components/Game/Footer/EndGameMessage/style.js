import styled from "styled-components";

export const EndMessage = styled.div`
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

    button{
        width: 167px;
        height: 32px;
        background-color: #FB6B6B;
        border-radius: 5px;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    button span{
        font-family: 'Recursive';
        font-weight: 400;
        font-size: 14px;
        color: #FFFFFF;
        width: auto;
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