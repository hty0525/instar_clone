import React from'react';
import Login from './pages/Login';
import Join from './pages/Join';
import Main from './pages/Main';
import Header from './components/header/Header';
import styled from 'styled-components';
import {Routes,Route} from 'react-router-dom'
const App = () => {

  return (
  <>
    <MainWrap>
      <Header/>
      <Routes>
        <Route path={'/'} element={<Main/>}/>
        <Route path={'/login'} element={<Login/>}/>
        <Route path={'/Join'} element={<Join/>}/>
      </Routes>
    </MainWrap>
  </>
  );
}
const MainWrap = styled.section`
    width:50%;
    margin:0 auto;
    padding-top:50px;
    background:powderblue;
`

export default App;
