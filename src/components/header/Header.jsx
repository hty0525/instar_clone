import React from 'react';
import Nav from './Nav';

import {useNavigate} from 'react-router-dom'
import styled from 'styled-components';
const Header = () => {
    const navigate = useNavigate();

    const goHome = ()=>{
        navigate('/')
    }
    return (
        <HeaderWrap>
            <Logo onClick={goHome}>
                로고
            </Logo>
            <Nav/>
        </HeaderWrap>
    );
};

const HeaderWrap = styled.header`
    display:flex;
    align-items: center;
    justify-content: space-between;
    width:100%;
    margin:0 auto;
    position: fixed;
    top:0;
    left:0;
    border:10px solid black;
`

const Logo = styled.h1`
    
`
export default Header;