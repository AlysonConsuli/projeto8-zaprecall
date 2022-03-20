import styled from "styled-components"

export const ClosedCardStyled = styled.div`
    width: 300px;
    height: 65px;
    background-color: #FFFFFF;
    box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
    border-radius: 5px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    padding: 0 15px;

    @media(min-width: 1100px){
        width: 567px;
        height: 92px;
        padding: 0 23px;

        img{
            width: 32px;
            height: 32px;
        }
    }
`