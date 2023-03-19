import FacebookIcon from '@mui/icons-material/Facebook';
import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import MapIcon from '@mui/icons-material/Map';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import styled from "styled-components";
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  `;

const Left = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    padding: 30px;
  `;

const Description = styled.p`
    margin: 15px 0px;
  `;

const SocialIcon = styled.div`
    width: 40px;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    color: white;
    background-color: #3B5999;
  `;

const Center = styled.div`
    flex: 1;
    padding: 20px;
    padding-left: 10px;
  `;

const Title = styled.h3`
    margin-bottom: 15px;
    text-align: center;
    font-size: 25px;
  `;

const Links = styled.ul`
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 20px;
  `;

const QuickLink = styled.li`
    padding: 10px;
  `;

const Right = styled.div`
    flex: 1;
    padding: 20px;
  `;

const ContactIcon = styled.div`
    display: flex;
    align-items: center;
  `;

const Footer = () => {
  return (
    <Container>
      <Left>
        <h1>About Us</h1>
        <Description>
          Proudly owned locally. Serving the community since the 1980s. Please get in touch with us
          in case of any questions about our services or products. Follow us on Facebook below.
        </Description>

        <SocialIcon>
          <FacebookIcon />
        </SocialIcon>

      </Left>
      <Center>
        <Title>Quick Links</Title>
        <Links>
          {/* <Link to = '/products'> */}
          <Link to='/' style={{ textDecoration: 'none' }}>
            <QuickLink>Home</QuickLink>
          </Link>
          <Link to='/cart' style={{ textDecoration: 'none' }}>
            <QuickLink>Cart</QuickLink>
          </Link>
          <Link to='/login' style={{ textDecoration: 'none' }}>
            <QuickLink>Login</QuickLink>
          </Link>
          <Link to='/register' style={{ textDecoration: 'none' }}>
            <QuickLink>Register</QuickLink>
          </Link>
        </Links>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactIcon>
          <MapIcon style={{ marginRight: "10px" }} /> 
          <p>1985 Lougheed, Port Coquitlam, BC</p>
        </ContactIcon>
        <ContactIcon>
          <PhoneIphoneIcon style={{ marginRight: "10px" }} /> <p>+1 (778) 122 4432</p>
        </ContactIcon>
        <ContactIcon>
          <AlternateEmailIcon style={{ marginRight: "10px" }} /> <p>maryhillmarket@gmail.com</p>
        </ContactIcon>
      </Right>
    </Container>
  );
};

export default Footer;