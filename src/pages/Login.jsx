import React,{useEffect,useState} from 'react';
import { getCookie,setCookie,deleteCookie } from '../shared/cookie';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
const Login = () => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    
    useEffect(() => {
        getCookie('user_id')
    }, [])

    const changeId = (e)=>{
        setId(e.target.value)
    }

    const changePw = (e)=>{
        setPw(e.target.value)
    }
    return (
        <LoginWrap>
            <LoginH>
                로그인
            </LoginH>
            <LoginLabel>
                아이디
            </LoginLabel>
            <LoginInput
                onChange={changeId}
            />

            <LoginLabel>
                비밀번호
            </LoginLabel>
            <LoginInput
                onChange={changePw}
            />

            <LoginBtn>
                로그인하기
            </LoginBtn>
        </LoginWrap>
    );
};

const LoginWrap = styled.form`
    width:100%;
    border:10px solid black;
    padding:10px;
`

const LoginH = styled.h1`
    width:100%;
    margin-bottom:20px;
`

const LoginLabel = styled.label`
    width:100%;
`
const LoginInput = styled.input`
    width:100%;
    padding:5px 10px;
    margin-bottom:10px;
`

const LoginBtn = styled.button`
    width:100%;
    padding:10px;
    background:black;
    color:white;
`

export default Login;