import Biblioteca from "Components/Biblioteca";
import Ttiulo from "Components/Titulo";
import { corFundoEscura } from "Components/UI/variaveis";
import React from "react";
import styled from "styled-components";

const Container = styled.main`
    width: 100%;
    height: calc(100vh - 70px);
    background: ${corFundoEscura};

`

const Sessao = styled.section`
    width: 80%;
    margin: 0 auto;
`

export default () => {
    return (
        <Container>
            <Sessao>
                <Ttiulo>Boa tarde</Ttiulo>
                <Biblioteca/>
            </Sessao>
        </Container>
    )
}
