import styled from 'styled-components';
import { allProducts } from './data';
import Product from './Product';

const Container = styled.div`
    padding: 15px;
    display: flex;
    flex-wrap: wrap;
    background-color: #FFF2EA;
`
const Products = ({ filter }) => {
    return (
        <Container>
            {allProducts.map(item => (
                <Product key={item.id} item={item} />
            ))}
        </Container>
    )
}
export default Products;