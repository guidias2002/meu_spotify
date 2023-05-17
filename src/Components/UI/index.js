import styled from 'styled-components'
import { corBranca, corBtnPlay } from './variaveis';

export const Icone = styled.img`
    heigth: 75px;
    width: 75px;
    border-radius: 5px 0 0 5px;
`;

export const IconeArtista = styled.img`
    width: 100%;
    border-radius: 120px;
`;


export const NomeArtista = styled.p`
    font-weight: bold;
    color: ${corBranca};
`;

export const Sessao = styled.section`
    width: 80%;
    margin: 0 auto;

    @media (max-width: 1200px) {
        width: 90%;
    }

    @media (max-width: 992px) {
        width: 95%;
    }
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
    grid-template-columns: repeat(6, 1fr);
    gap: 20px;
    align-items: center;

    @media (max-width: 992px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 768px) {
        grid-template-columns: repeat(1, 1fr);
        gap: 10px;
    }
`;


