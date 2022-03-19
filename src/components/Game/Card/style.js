import styled from "styled-components";

export const ClosedCard = styled.div`
    width: 182px;
    height: 40px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 5px;
    padding: 0 12px 0 6px;
`

export const OpenCard = styled.div`
    width: 182px;
    min-height: 80px;
    background-color: #FFFFD4;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    margin-bottom: 14px;
    padding: 13px 0 33px 6px;
    position: relative;

    span{
        font-weight: 400;
    }

    img{
        position: absolute;
        bottom: 7px;
        right: 8px;
    }
`

export const Btn = styled.button`
    width: 55px;
    height: 24px;
    border-radius: 5px;
    border: none;
    position: absolute;
    bottom: 3px;
    cursor: pointer;
    font-family: 'Recursive';
    font-weight: 400;
    font-size: 7px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #FFFFFF;

    :first-child{
        left: 3px;
        background-color: #FF3030;
    }
    :nth-child(2){
        left: calc(50% - 27.5px);
        background-color: #FF922E;
    }
    :last-child{
        right: 3px;
        background-color: #2FBE34;
    }
`

export const Red = styled.span`
    text-decoration-line: line-through;
    color: #FF3030 !important;
`

export const Yellow = styled.span`
    text-decoration-line: line-through;
    color: #FF922E !important;
`

export const Green = styled.span`
    text-decoration-line: line-through;
    color: #2FBE34 !important;
`