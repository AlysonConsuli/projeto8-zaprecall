import styled from "styled-components"

export const OpenCardStyled = styled.div`
    width: 300px;
    min-height: 131px;
    background-color: #FFFFD4;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 25px;
    padding: 18px 15px 68px 15px;
    position: relative;

    span{
        font-weight: 400;
        font-size: 18px;
    }

    img{
        position: absolute;
        bottom: 6px;
        right: 15px;
    }

    @media(min-width: 1100px){
        width: 567px;
        min-height: 185px;

        img{
            width: 48px;
            height: 32px;
        }

        span{
            font-size: 32px;
        }
    }
`

export const Btn = styled.button`
    width: 85px;
    height: 37px;
    border-radius: 5px;
    border: none;
    position: absolute;
    bottom: 6px;
    cursor: pointer;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;

    :first-child{
        left: 14px;
        background-color: #FF3030;
    }
    :nth-child(2){
        left: calc(50% - 42.5px);
        background-color: #FF922E;
    }
    :last-child{
        right: 14px;
        background-color: #2FBE34;
    }

    @media(min-width: 1100px){
        width: 127px;
        height: 55px;
        font-size: 18px;
        bottom: 10px;

        :first-child{
            left: 18px;     
        }
        :nth-child(2){
            left: calc(50% - 63.5px);
        }
        :last-child{
            right: 18px;
        }
    }
`