import React from "react";
import styled from "styled-components";

import { artistas } from 'info'
import Cards from "Components/Cards";
import { Box } from "Components/UI";

const Biblioteca = (props) => {
    return (
        <Box>
            {artistas.dados.map(({ id, nome, tag, profissao }) => {
                return (
                    <Cards id={id} nome={nome} tag={tag} profissao={profissao}/>
                )
            })}
        </Box>
    )
}

export default Biblioteca;