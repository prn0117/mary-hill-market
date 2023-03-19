import React from 'react'
import styled from 'styled-components'
import { Category } from './Category'
import { categories } from './data'

const Container = styled.div`
    display: flex;
    justify-content: space-between;
`
export const Categories = () => {
  return (
    <Container>
      {categories.map(item => (
        <Category key={item.id} item={item} />
      ))}
    </Container>
  )
}
