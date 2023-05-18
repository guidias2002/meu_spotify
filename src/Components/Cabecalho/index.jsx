import React from "react";
import styled from 'styled-components'

import { corBranca, corFundoEscura } from "Components/UI/variaveis";
import logo from 'assets/images/spotify-2.svg'

const StyledHeader = styled.header`
    background-color: ${corFundoEscura};
`

const Navigation = styled.nav`
    width: 80%;
    height: 90px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;

    @media (max-width: 1400px) {
        width: 90%;
    }

    @media (max-width: 992px) {
        width: 95%;
    }
`

const Logo = styled.img`
    width: 50px;
`

const Link = styled.a`
    text-decoration: none;
    color: ${(props) => (props.primary ? corFundoEscura : "white")};
    background: ${(props) => (props.primary ? "white" : corFundoEscura)};
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
                    <Link primary href="https://open.spotify.com/" target="_blank">Sporify</Link>
                    <Link href="">Sobre</Link>
                </div>
            </Navigation>
        </StyledHeader>
    )
}

export default Cabecalho;