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
