import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Link } from 'react-router-dom';

const Container = styled.div`
    height: 100px;
    background-color: #FFF2EA;
    padding: 20px 30px;
    background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://cdn.pixabay.com/photo/2016/11/30/15/23/apples-1873078_1280.jpg"),
      center;
`
const InnerContainer = styled.div`
    padding: 20px 30px;
    display: flex;
    align-items: center;
`
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`
const Center = styled.div`
    flex: 1;
    text-align: center;
`
const Mary = styled.h1`
    font-weight: bold;
    cursor: pointer;
    color: #e3fce1;
    font-size: 40px;
`
const Right = styled.div`
    background-color: aliceblue;
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
`

const MenuItem = styled.div`
    cursor: pointer;
    font-size: 20px;
`
const Navbar = () => {
    const scrollToBottom = () => {
        window.scroll({
            left: 0,
            top: document.body.scrollHeight,
            behavior: 'smooth'
        })
    }
    return (
        <Container>
            <InnerContainer>
                <Left>
                    <Link to='/' style={{ textDecoration: 'none' }}>
                        <Mary>Mary Hill Market</Mary>
                    </Link>
                </Left>
                <Center></Center>
                <Right>
                    <Link to='/register' style={{ textDecoration: 'none' }}>
                        <MenuItem>REGISTER</MenuItem>
                    </Link>
                    <Link to='/login' style={{ textDecoration: 'none' }}>
                        <MenuItem>LOGIN</MenuItem>
                    </Link>
                    <Link to='/cart' style={{ textDecoration: 'none' }}>
                        <MenuItem><ShoppingCartOutlinedIcon /></MenuItem>
                    </Link>
                    <MenuItem onClick={scrollToBottom}>ABOUT US</MenuItem>
                </Right>
            </InnerContainer>
        </Container>
    )
}

export default Navbar