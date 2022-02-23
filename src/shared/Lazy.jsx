import React, { useEffect } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2'
import { useNavigate } from 'react-router-dom';

const Lazy = ({msg}) => {
    const navigate = useNavigate()
    useEffect(() => {
        return () => {
            navigate('/',{replace:true})
            console.log(msg)
            msg&&Swal.fire(msg,"",'success')
        }
    }, [])
    

    return (
        <LazyLoading>
            <Loader></Loader>
        </LazyLoading>
    );
};

const LazyLoading = styled.div`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    height:100%;
    display:flex;
    align-items:center ;
    justify-content: center;
    background:white;
    z-index: 999;
`

const Loader = styled.span `
    width: 150px; height: 150px;
    border: 10px solid #f3f3f3;
    border-radius: 50%;
    border-top: 10px solid #3498db;
    width: 120px; height: 120px;
    animation: spin 2s linear infinite;
    @keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }
`

export default Lazy;