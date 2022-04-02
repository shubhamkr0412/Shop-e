import React from "react";
import styled from "styled-components";
import { Search, ShoppingCartOutlined } from "@material-ui/icons";
import { Badge } from "@material-ui/core";


const Container = styled.div`
  height: 60px;
  
`;
const Logo=styled.h1`font-weight:bold;`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items:center;
  justify-content: space-between;
`;

const Input=styled.input`border:none;`

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;

const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 1;
  display:flex;
  align-items:center;
  justify-content:flex-end;
 
`;

const Center = styled.div`
  flex: 1;
  text-align:center;
`;
const SearchContainer = styled.div`
border:0.5px solid lightgreen;
  display: flex;
  align-items: center;
  margin-left:25px;
  padding:5px;

`;
const MenuItem=styled.div`font-size:14px;
 
cursor: pointer;
margin-left: 25px;`

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearchContainer>
            <Input/>
            <Search style={{color:"blue",fontsize:"16px"}} />
          </SearchContainer>
        </Left>
        <Center><Logo>E-Commerce</Logo>  </Center>
        <Right><MenuItem>Register</MenuItem>
        <MenuItem>Sign-In</MenuItem>
        <MenuItem><Badge badgeContent={4} color="primary">
          <ShoppingCartOutlined/>
        </Badge></MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
