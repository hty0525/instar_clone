import React, { useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { joinFB } from '../redux/modules/user';

const Join = () => {
    const dispatch = useDispatch();
    const emailRef = useRef();
    const nameRef = useRef();
    const pwRef = useRef();
    const pwconfirm = useRef()
    const navigate = useNavigate()
    const handleJoin = (e)=>{
        e.preventDefault();

        const email = emailRef.current.value;
        const name = nameRef.current.value;
        const pw = pwRef.current.value;
        const data = {
            email,
            pw,
            name
        }
        dispatch(joinFB(data))
        navigate('/', {replace:true})
    }

    return (
        <JoinWrap onSubmit={handleJoin}>
            <JoinH>
                회원가입
            </JoinH>
            <JoinLabel>
                아이디
            </JoinLabel>
            <JoinInput
                placeholder='이메일을 입력해주세요'
                ref={emailRef}
            />

            <JoinLabel>
                닉네임
            </JoinLabel>
            <JoinInput
                placeholder='닉네임을 입력해주세요'
                ref={nameRef}
            />

            <JoinLabel>
                비밀번호
            </JoinLabel>
            <JoinInput
                placeholder='비밀번호를 입력해주세요'
                ref={pwRef}
                type="password"
            />

            <JoinLabel>
                비밀번호 확인
            </JoinLabel>
            <JoinInput
                placeholder='비밀번호를 다시 입력해주세요'
                ref={pwconfirm}
                type="password"
            />
            <JoinBtn>
                회원가입하기
            </JoinBtn>
        </JoinWrap>
    );
};

const JoinWrap = styled.form`
    width:100%;
    border:10px solid black;
    padding:10px;
`

const JoinH = styled.h1`
    width:100%;
    margin-bottom:20px;
`

const JoinLabel = styled.label`
    width:100%;
`
const JoinInput = styled.input`
    width:100%;
    padding:5px 10px;
    margin-bottom:10px;
`

const JoinBtn = styled.button`
    width:100%;
    padding:10px;
    background:black;
    color:white;
`

export default Join;