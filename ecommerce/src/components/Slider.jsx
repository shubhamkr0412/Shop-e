import { ArrowLeftOutlined, ArrowRightAltOutlined } from "@material-ui/icons";
import { useState } from "react";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  background-color: bisque;
  overflow: hidden;
`;
const Wrapper = styled.div`
  height: 100%;
  display: flex;
  transform:translateX(0vw)
`;

const Arrow = styled.div`
  height: 50px;
  width: 50px;
  background-color: lightcyan;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  margin: auto;
  cursor: pointer;
  opacity: 0.5;
  z-index:2;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;

  align-items: center;
`;

const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;
const Title = styled.h1`
  font-size: 70px;
`;
const Desc = styled.p`
  margin: 50px 0px;

  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  background-color: transparent;
  cursor: pointer;
`;
const Image = styled.img`
  height: 70%;
`;
const Slider = () => {
    const [slideIndex,setSlideIndex]=useState(0);
    const handleClick=(direction)=>{

    }
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleClick("left")}>
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide bg="lightblue">
          <ImageContainer>
            <Image src="https://sugermint.com/wp-content/uploads/2020/01/AJIO-dil-se-Online-Shopping-for-Women-Men-Kids-%E2%80%93-Clothing-Footwear-Fashion-758x497.jpg" />
          </ImageContainer>
          <InfoContainer>
            <Title>Summer Sale</Title>
            <Desc>Don't Follow the Rules, Try Breaking Once</Desc>
            <Button>Shop</Button>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImageContainer>
            <Image src="https://sugermint.com/wp-content/uploads/2020/01/AJIO-dil-se-Online-Shopping-for-Women-Men-Kids-%E2%80%93-Clothing-Footwear-Fashion-758x497.jpg" />
          </ImageContainer>
          <InfoContainer>
            <Title>Winter Sale</Title>
            <Desc>Don't Follow the Rules, Try Breaking Once</Desc>
            <Button>Shop</Button>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImageContainer>
            <Image src="https://sugermint.com/wp-content/uploads/2020/01/AJIO-dil-se-Online-Shopping-for-Women-Men-Kids-%E2%80%93-Clothing-Footwear-Fashion-758x497.jpg" />
          </ImageContainer>
          <InfoContainer>
            <Title>Popular Sale</Title>
            <Desc>Don't Follow the Rules, Try Breaking Once</Desc>
            <Button>Shop</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleClick("right")}>
        <ArrowRightAltOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
