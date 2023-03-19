import styled from "styled-components";
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Container = styled.div`
  height: 50vh;
  background-image: url('https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_1280.jpg');
  background-color: #fcf5f5;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  color: wheat;
`;

const Description = styled.div`
  font-size: 28px;
  font-weight: 500;
  margin-bottom: 20px;
  color: wheat;
`;

const InputContainer = styled.div`
  width: 30%;
  margin-top: 20px;
  height: 40px;
  display: flex;
`;

const Input = styled.input`
  border: none;
  flex: 5;
  padding-left: 30px;
`;

const Button = styled.button`
  flex: 1;
  border: solid 2px ;
  background-color: #8B4513;
  color: white;
`;

const MailList = () => {
    return (
        <Container>
            <Title>Join our mailing list</Title>
            <Description>Get updates on weekly deals and sales.</Description>
            <InputContainer>
                <Input placeholder="user@mail.com" />
                <Button>
                    <EmailOutlinedIcon />
                </Button>
            </InputContainer>
        </Container>
    );
};

export default MailList;