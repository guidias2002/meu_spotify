import React, { useState } from "react";
import styled from "styled-components";
import ImageFilter from 'Components/ImageFilter'

import { corBranca, corCardEscura } from "Components/UI/variaveis";
import { FaPlay } from "react-icons/fa";
import { BtnPlay } from "Components/UI";


const Cards = styled.div`
    display: flex;
    background-color: ${corCardEscura};
    border-radius: 5px;
    cursor: pointer;

    .descricao {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 10px;
    }
`

const NomeArtista = styled.p`
    font-weight: bold;
    color: ${corBranca};

`

export default (props) => {

    const [botao, setBotao] = useState(false)

    return (
        <Cards
            onMouseEnter={() => setBotao(true)}
            onMouseLeave={() => setBotao(false)}
        >
            {ImageFilter(props.tag)}
            <div className="descricao">
                <NomeArtista>
                    {props.nome}
                </NomeArtista>
                {botao ? <BtnPlay> <FaPlay /> </BtnPlay> : "" }
            </div>
        </Cards>
    )
}