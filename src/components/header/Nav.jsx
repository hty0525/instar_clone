import React, { useEffect, useState } from 'react';
import { getCookie,deleteCookie } from '../../shared/cookie';

import { useNavigate } from 'react-router-dom';
import styled from 'styled-components'


const Nav = () => {
    const[islogin,setIsLogin]= useState(false)
    const navigate = useNavigate();
    const logOut = ()=>{
        deleteCookie('user_id')
    }

    const goLoginPage = ()=>{
        navigate('/login')
    }

    const goJoinPage = ()=>{
        navigate('/join')
    }

    useEffect(()=>{
        let cookie = getCookie('user_id')
        if(cookie){
            setIsLogin(true)
        }

    },[islogin])
    if(islogin){
        return (
            <NavWrap>
                <NavItem>
                    <NavBtn>
                        내정보
                    </NavBtn>
                    <NavBtn>
                        알림
                    </NavBtn>
                    <NavBtn
                        onClick={logOut}>
                        로그아웃
                    </NavBtn> 
                </NavItem>
            </NavWrap>
        )
    }
    return (
        <NavWrap>
            <NavItem>
                <NavBtn onClick={goLoginPage}>
                    로그인
                </NavBtn>
                <NavBtn onClick={goJoinPage}>
                    회원가입
                </NavBtn>
            </NavItem>
        </NavWrap>
    );
};

const NavWrap = styled.ul`
    margin:0 auto;
`
const NavItem = styled.li`
    
`

const NavBtn = styled.button`
    
`

export default Nav;