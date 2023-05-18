import styled from 'styled-components'
import { corBranca, corBtnPlay } from './variaveis';

export const Icone = styled.img`
    heigth: 75px;
    width: 75px;
    border-radius: 5px 0 0 5px;
`;


export const NomeArtista = styled.p`
    font-weight: bold;
    color: ${corBranca};
`;

export const Sessao = styled.section`
    width: 80%;
    margin: 0 auto;

    @media (max-width: 1400px) {
        width: 90%;
    }

    @media (max-width: 992px) {
        width: 95%;
    }
`;

export const BtnPlay = styled.button`
    transition: 500ms;
    padding: 15px;
    background-color: ${corBtnPlay};
    border-radius: 30px;
    border: none;
    cursor: pointer;
    position: absolute;
    top: 130px;
    right: 20px;
`;

export const Box = styled.div`
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
    align-items: center;
    width: 100%;

    @media (max-width: 992px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 10px;
    }
`;

export const BoxArtistas = styled.div`
    width: 100%;
    display: grid;
    margin: 0 auto;
    grid-template-columns: repeat(6, auto);
    gap: 20px;
    align-items: center;

    @media (max-width: 1400px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(2, 1fr);
        gap: 10px;
    }
`;

export const IconeArtista = styled.img`
    width: 100%;
    border-radius: 200px;
`;


