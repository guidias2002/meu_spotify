import styled from 'styled-components'
import { corBranca, corBtnPlay } from './variaveis';

export const Icone = styled.img`
    heigth: 75px;
    width: 75px;
    border-radius: 5px 0 0 5px;
`;

export const IconeArtista = styled.img`
    heigth: 175px;
    width: 175px;
    border-radius: 90px;
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
`;

export const Sessao = styled.section`
    width: 70%;
    margin: 0 auto;
`;

export const DescricaoArtista = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top: 20px;
`;

export const NomeArtista = styled.p`
    font-weight: bold;
    color: ${corBranca};
`;

export const BoxArtistas = styled.div`
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
    align-items: center;
    width: 100%;
`