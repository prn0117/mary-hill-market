import React from 'react'
import { useState } from "react";
import styled from "styled-components";
import ChevronLeftOutlinedIcon from '@mui/icons-material/ChevronLeftOutlined';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';
import { sliderItems } from "./data";
import { Link } from 'react-router-dom';


const Container = styled.div`
  width: 100%;
  height: 90vh;
  display: flex;
  position: relative;
  overflow: hidden;
`;

const Chevron = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  color: black;
  transform: scale(2.0);
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "30px"};
  right: ${(props) => props.direction === "right" && "-5px"};
  margin: auto;
  cursor: pointer;
  z-index: 2;
`;

const SliderContainer = styled.div`
  height: 100%;
  display: flex;
  transition: all 1.5s ease;
  transform: translateX(${(props) => props.slideIndex * -100}vw);
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  background-color: white;
`;

const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
`;

const Image = styled.img`
  height: 90%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 80px;
`;

const Description = styled.p`
  margin: 40px 0px;
  font-size: 30px;
`;

const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: crimson;
  cursor: pointer;
  color: whitesmoke;
  border: none;
`;
const ButtonHover = styled.div`
  &:hover ${Button} {
    color: crimson;
    background-color: white;
    border: solid crimson;
  }
`
const Slider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideIndex(slideIndex > 0 ? slideIndex - 1 : sliderItems.length - 1);
    } else {
      setSlideIndex(slideIndex < sliderItems.length - 1 ? slideIndex + 1 : 0);
    }
  };

  return (
    <Container>
      <Chevron direction="left" onClick={() => handleClick("left")}>
        <ChevronLeftOutlinedIcon />
      </Chevron>
      <SliderContainer slideIndex={slideIndex}>
        {sliderItems.map((item) => (
          <Slide key={item.id}>
            <ImgContainer>
              <Image src={item.img} />
            </ImgContainer>
            <InfoContainer>
              <Title>{item.title}</Title>
              <Description>{item.desc}</Description>
              <Link to='/products'>
                <ButtonHover>
                  <Button>SHOP NOW</Button>
                </ButtonHover>
              </Link>

            </InfoContainer>
          </Slide>
        ))}
      </SliderContainer>
      <Chevron direction="right" onClick={() => handleClick("right")}>
        <ChevronRightOutlinedIcon />
      </Chevron>
    </Container>
  );
};

export default Slider;