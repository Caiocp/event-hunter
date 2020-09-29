import React, { useState } from 'react';
import { Modal } from '@material-ui/core';

import {
  Container,
  Row,
  TitleContainer,
  TitleText,
  SubTitleText,
  ButtonGroup,
  LinkBtn,
} from './styles';

function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Container>
      <Row>
        <TitleContainer>
          <TitleText>Event Hunter</TitleText>
          <SubTitleText>A plataforma de eventos em um só lugar</SubTitleText>
        </TitleContainer>
        <ButtonGroup>
          <LinkBtn to="/a">Seja parceiro</LinkBtn>
          <LinkBtn>Quem somos</LinkBtn>
          <LinkBtn onClick={() => setIsModalOpen(true)}>Entrar</LinkBtn>
        </ButtonGroup>
      </Row>
    </Container>
  );
}

export default Dashboard;
