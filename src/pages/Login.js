import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: 
    url("https://cdn.pixabay.com/photo/2016/11/30/15/23/apples-1873078_1280.jpg")
      center;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoContainer = styled.div`
  width: 25%;
  padding: 40px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 10px 0;
  padding: 15px;
  font-size: 25px;
`;

const Button = styled.button`
  border: none;
  padding: 15px 20px;
  background-color: crimson;
  color: white;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: 20px;
`;



const Login = () => {
  return (
    <Container>
      <InfoContainer>
        <Title>SIGN IN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link to={'/register'} style={{ textDecoration: 'none' }}
          >CREATE A NEW ACCOUNT</Link>
        </Form>
      </InfoContainer>
    </Container>
  );
};

export default Login;