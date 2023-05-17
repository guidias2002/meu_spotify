import React, { useState } from "react";
import ImageFilterArtista from "Components/ImageFilterArtista";
import { NomeArtista } from "Components/UI";
import styled from "styled-components";
import { corBtnPlay, corCardEscura } from "Components/UI/variaveis";
import { FaPlay } from "react-icons/fa";

const CardArtista = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    align-items: center;
    background-color: ${corCardEscura};
    border-radius: 5px;
    cursor: pointer;
    position: relative;

    .p {
        color: white;
    }
`

const DescricaoArtista = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 20px 0;
`;

const BtnPlay = styled.button`
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

export default (props) => {

    const [mostrar, setMostrar] = useState(false)

    return (
        <CardArtista
            onMouseEnter={() => setMostrar(true)}
            onMouseLeave={() => setMostrar(false)}
        >
            {ImageFilterArtista(props.tag)}
            <DescricaoArtista>
                {mostrar ? <BtnPlay><FaPlay/></BtnPlay> : ""}
                <NomeArtista>{props.nome}</NomeArtista>
                <p className="p">{props.profissao}</p>
            </DescricaoArtista>
        </CardArtista>
    )
}