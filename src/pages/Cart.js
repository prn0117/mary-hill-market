import styled from "styled-components";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";


const Container = styled.div``;

const InfoContainer = styled.div`
  padding: 20px;
 
`;

const Left = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Info = styled.div`
  flex: 3;
`;

const ProductContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProductDetails = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: 200;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Right = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
`;


const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
  border: none;
`;

const Cart = () => {
  return (
    <Container>
      <Navbar />
      <InfoContainer>
        <h1 style={{ textAlign: 'center' }}>YOUR ITEMS</h1>
        <Left>
          <Info>
            <ProductContainer>
              <img src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                style={{ width: '200px' }} alt='apples' />
              <ProductDetails>
                <b>Product:</b> Apples
              </ProductDetails>
              <PriceDetail>
                $ 30
              </PriceDetail>
            </ProductContainer>
            <Hr />
            <ProductContainer>
              <img src="https://cdn.pixabay.com/photo/2018/03/09/17/39/paprika-3212137_1280.jpg"
                style={{ width: '200px' }} alt='peppers' />
              <ProductDetails>
                <b>Product:</b> Peppers
              </ProductDetails>
              <PriceDetail>
                $ 20
              </PriceDetail>
            </ProductContainer>
          </Info>
          <Right>
            <h1>ORDER SUMMARY</h1>
            <SummaryItem>
              <span>Subtotal</span>
              <span>$ 50.00</span>
            </SummaryItem>
            <SummaryItem>
              <span>Estimated Shipping</span>
              <span>$ 8.00</span>
            </SummaryItem>
            <SummaryItem>
              <span>QST</span>
              <span>$ 2.00</span>
            </SummaryItem>
            <SummaryItem type="total">
              <span style={{fontSize: '25px'}}>Total</span>
              <span style={{fontSize: '25px'}}>$ 60.00</span>
            </SummaryItem>
            <Button>CHECKOUT</Button>
          </Right>
        </Left>
      </InfoContainer>
      <Footer />
    </Container>
  );
};

export default Cart;