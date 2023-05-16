import styled from 'styled-components'
import { corBtnPlay } from './variaveis';

export const Icone = styled.img`
    heigth: 75px;
    width: 75px;
    border-radius: 5px 0 0 5px;
`;

export const Box = styled.div`
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    align-items: center;
    width: 100%;
`;

export const BtnPlay = styled.button`
    transition: 500ms;
    padding: 15px;
    background-color: ${corBtnPlay};
    border-radius: 30px;
    border: none;
    cursor: pointer;
`