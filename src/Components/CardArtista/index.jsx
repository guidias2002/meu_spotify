import React from "react";
import ImageFilterArtista from "Components/ImageFilterArtista";
import { DescricaoArtista, NomeArtista } from "Components/UI";
import styled from "styled-components";
import { corCardEscura } from "Components/UI/variaveis";

const CardArtista = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: center;
    background-color: ${corCardEscura};
    border-radius: 5px;
    height: 300px;

    .p {
        color: white;
    }
`

export default (props) => {
    return (
        <CardArtista>
            {ImageFilterArtista(props.tag)}
            <DescricaoArtista>
                <NomeArtista>{props.nome}</NomeArtista>
                <p className="p">{props.profissao}</p>
            </DescricaoArtista>
        </CardArtista>
    )
}