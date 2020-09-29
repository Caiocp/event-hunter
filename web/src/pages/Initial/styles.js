import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 70vw;
  margin: 0 0 80px 0;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TitleText = styled.label`
  font-family: 'Rajdhani', sans-serif;
  font-size: 82px;
  letter-spacing: 5px;
  color: #fff;
`;

export const SubTitleText = styled.p`
  font-family: 'Questrial', sans-serif;
  font-size: 32px;
  color: #fff;
`;

export const ButtonGroup = styled.div`
  flex-direction: row;
`;

export const LinkBtn = styled(Link)`
  color: #fff;
  text-decoration: none;
  margin: 0 40px;
  font-size: 20px;
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;
  border: 1px solid #fff;
  border-radius: 8px;
  width: 26vw;
  height: 40vh;
  padding: 10px;
`;

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`;

export const Title = styled.label`
  font-family: 'Rajdhani', sans-serif;
  font-size: 32px;
  font-weight: bold;
  color: #fff;
`;

export const RegisterButton = styled.button`
  height: 40px;
  width: 80%;
  padding: 10px;
  border-radius: 8px;
  background-color: #11bd53;
  color: #fff;
  margin-top: 30px;
  border: 0;
  transition: filter 0.2s;
  cursor: pointer;
`;

export const RegisterBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  label {
    margin-bottom: 100px;
  }

  ${RegisterButton}:hover {
    filter: brightness(90%);
  }
`;

export const Input = styled.input`
  height: 40px;
  width: 80%;
  padding: 10px;
  border-radius: 8px;
  color: #333;
  margin-bottom: 15px;
`;

export const LoginButton = styled(Link)`
  height: 40px;
  width: 80%;
  padding: 10px;
  border-radius: 8px;
  background-color: #461071;
  color: #fff;
  margin-top: 30px;
  font-weight: bold;
  border: 0;
  transition: filter 0.2s;
  cursor: pointer;
  text-decoration: none;
  text-align: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 300px;
  width: 400px;
  border-radius: 8px;
  background-color: #333;
  padding: 10px;
  color: #fff;

  ${LoginButton}:hover {
    filter: brightness(90%);
  }
`;

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 50px;
`;
