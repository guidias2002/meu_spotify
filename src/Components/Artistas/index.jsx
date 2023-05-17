import React from "react";
import styled from 'styled-components'

import { artistas } from 'info'
import CardArtista from "Components/CardArtista";
import { BoxArtistas } from "Components/UI";



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