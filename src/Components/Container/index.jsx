import React from "react";
import styled from "styled-components";
import Biblioteca from "Components/Biblioteca";
import Titulo from "Components/Titulo";
import { Sessao } from "Components/UI";
import { corFundoEscura } from "Components/UI/variaveis";
import Artistas from "Components/Artistas";

const Container = styled.main`
    width: 100%;
    height: calc(100vh - 90px);
    background: ${corFundoEscura};

    @media (max-width: 1400px) {
        height: 100%;
        padding-bottom: 20px;
    }
`

export default () => {
    return (
        <Container>
            <Sessao>
                <Titulo>Boa tarde</Titulo>
                <Biblioteca/>
            </Sessao>
            <Sessao>
                <Titulo>Feito para Guilherme Dias</Titulo>
                <Artistas/>
            </Sessao>
        </Container>
    )
}
