import styled from "styled-components";

export const EntryScreen = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding-top: 148px;

    h1 {
    font-family: 'Righteous';
    font-size: 36px;
    color: #FFFFFF;
    margin-top: 13px;
    margin-bottom: 45px;
    }

    button {
        width: 246px;
        height: 54px;
        border: solid 1px #FB6B6B;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.15);
        border-radius: 5px;
        background: #FFFFFF;
        font-family: 'Recursive', sans-serif;
        font-weight: 400;
        cursor: pointer;
    }

    span {
        font-size: 18px;
        text-align: center;
        color: #D70900;
    }

    input{
        width: 246px;
        min-height: 43px;
        background: #FFFFFF;
        border-radius: 5px;
        border: none;
        margin-bottom: 15px;
        font-family: 'Recursive';
        font-weight: 400;
        cursor: pointer;
        font-size: 18px;
        padding-left: 10px;
    }

    select{
        width: 246px;
        min-height: 43px;
        background: #FFFFFF;
        border-radius: 5px;
        border: none;
        margin-bottom: 15px;
        font-family: 'Recursive';
        font-weight: 400;
        cursor: pointer;
        font-size: 18px;
        padding-left: 5px;
    }

    @media (min-width: 1100px){

        padding-top: 50px;

        h1 {
            font-size: 64px;
            margin-top: 6px;
            margin-bottom: 75px;
        }

        button {
            width: 400px;
            height: 70px;
        }

        span {
            font-size: 22px;
        }

        input,
        select{
            width: 400px;
            height: 70px;
            font-size: 24px;
        }

        img{
            width: 150px;
        }
    }

`