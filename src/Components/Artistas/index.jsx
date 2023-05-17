import React from "react";
import styled from 'styled-components'

import { BoxArtistas } from "Components/UI";
import { artistas } from 'info'
import CardArtista from "Components/CardArtista";

const Artistas = () => {
    return (
        <BoxArtistas>
            {artistas.dados.map(({ id, nome, tag, profissao }) => {
                return (
                    <CardArtista id={id} nome={nome} tag={tag} profissao={profissao}/>
                )
            })}
        </BoxArtistas>
    )
}

export default Artistas;