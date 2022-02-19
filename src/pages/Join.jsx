import React from 'react';
import styled from 'styled-components';
const Join = () => {

    const handleJoin = (e)=>{
        e.preventDefault();
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
                placeholder='아이디를 입력해주세요'
            />

            <JoinLabel>
                닉네임
            </JoinLabel>
            <JoinInput
                placeholder='닉네임을 입력해주세요'
            />

            <JoinLabel>
                비밀번호
            </JoinLabel>
            <JoinInput
                placeholder='비밀번호를 입력해주세요'
            />

            <JoinLabel>
                비밀번호 확인
            </JoinLabel>
            <JoinInput
                placeholder='비밀번호를 다시 입력해주세요'
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