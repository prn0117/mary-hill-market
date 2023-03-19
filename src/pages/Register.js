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
  width: 40%;
  padding: 20px;
  background-color: white;
`;

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;
  font-size: 20px;
  text-align: center;
`;

const Agreement = styled.span`
  font-size: 12px;
  margin: 20px 0px;
`;

const Button = styled.button`
  width: 100%;
  border: none;
  padding: 15px 20px;
  background-color: crimson;
  color: white;
  cursor: pointer;
  margin-top: 20px;
  margin-bottom: 30px;
  font-size: 20px;
`;

const Register = () => {
  return (
    <Container>
      <InfoContainer>
        <Title>CREATE AN ACCOUNT</Title>
        <Form>
          <Input placeholder="First name" />
          <Input placeholder="Last name" />
          <Input placeholder="Username" />
          <Input placeholder="Email" />
          <Input placeholder="Password" />
          <Input placeholder="Confirm password" />
          <Agreement>
            By creating an account, you consent to the collection of order info according to the <b>PRIVACY POLICY</b>
          </Agreement>
          <Button>REGISTER</Button>
          <p>
            Aleady a member? <Link to={'/login'} style={{ textDecoration: 'none' }}
            >LOG IN </Link>
          </p>

        </Form>
      </InfoContainer>
    </Container>
  );
};

export default Register;