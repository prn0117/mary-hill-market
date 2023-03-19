import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    margin: 3px;
    min-width: 280px;
    height: 400px;
`
const Image = styled.img`
    float: left;
    width:  75%;
    height: 75%;
    object-fit: cover;
`
const Title = styled.h1`
    margin: 5px;
    align-self: center;
    cursor: pointer;
    font-size: 28px;
    color: #0D0106;
`
const Price = styled.h3`
    align-self: center;
    margin: 1px;
    color: #0D0106;
`

const Product = ({ item }) => {
    return (
        <Container>
            <Image src={item.img} />
            <Title> {item.title}</Title>
            <Price>{item.price}</Price>
        </Container>

    )
}
export default Product;