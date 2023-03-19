import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
    flex: 1;
    height: 80vh;
    position: relative;
`
const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`
const InfoCont = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0; 
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    font-size: 30px;
`
const Title = styled.h1`
    color: white;
    font-weight: bolder;
`
const Button = styled.button`
    padding: 10px;
    font-size: 20px;
    border: none;
    background-color: #4F345A;
    color: white;
    cursor: pointer;
`
const ButtonHover = styled.div`
  &:hover ${Button} {
    color: #4F345A;
    background-color: white;
    border: solid #4F345A;
  }
`
export const Category = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <InfoCont>
                <Title>{item.title}</Title>
                <Link to='/products'>
                    <ButtonHover> <Button> Click Here</Button></ButtonHover>
                </Link>
            </InfoCont>
        </Container>
    )
}
