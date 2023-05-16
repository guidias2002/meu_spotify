import React from "react";
import styled from 'styled-components'

import { corBranca, corPimaria } from "Components/UI/variaveis";
import logo from 'Components/assets/images/spotify-2.svg'

const StyledHeader = styled.header`
    background-color: ${corPimaria};
    padding: 10px 0;
`

const Navigation = styled.nav`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
`

const Logo = styled.img`
    width: 50px;
`

const Link = styled.a`
    text-decoration: none;
    color: ${(props) => (props.primary ? corPimaria : "white")};
    background: ${(props) => (props.primary ? "white" : corPimaria)};
    margin-left: 20px;
    padding: 5px 10px;
    border-radius: 10px;
    border: 2px solid ${corBranca};
    font-weight: bold;
`


const Cabecalho = () => {
    return (
        <StyledHeader>
            <Navigation>
                <Logo src={logo}/>
                <div>
                    <Link primary href="">Ver mais</Link>
                    <Link href="">Ajuda</Link>
                </div>
            </Navigation>
        </StyledHeader>
    )
}

export default Cabecalho;