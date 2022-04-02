import React from 'react'
import styled from "styled-components"
import AccessTimeIcon from '@mui/icons-material/AccessTime';

const Container=styled.div`height:60px;
background-color:green`;
const Wrapper=styled.div`padding:10px 20px;display:flex;
justify-content:space-between`;
const Left=styled.div`
flex:1`;
const Language=styled.span`font-size:14px;
cursor: pointer;`
const Right=styled.div`flex:1; `;
const Center=styled.div`flex:1;`;
const SearchContainer=styled.div`border:1px solid lightblue;`;


const Navbar = () => {
  return (
    <Container><Wrapper><Left><Language>English</Language>
    <SearchContainer><AccessTimeIcon/></SearchContainer></Left>
    <Center>Center</Center>
    <Right>Right</Right>
    </Wrapper></Container>
  )
}

export default Navbar