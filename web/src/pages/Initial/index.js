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
  Box,
  Section,
  Title,
  RegisterBox,
  Input,
  RegisterButton,
  ModalContainer,
  ModalContent,
  LoginButton,
} from './styles';
import image from '../../assets/initialHero.png';

function Initial() {
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
      <Row>
        <img src={image} alt="hero team" />
        <Box>
          <Section>
            <RegisterBox>
              <Title>Faça seu cadastro</Title>
              <Input placeholder="Digite seu nome" />
              <Input placeholder="Digite seu e-mail" />
              <RegisterButton>Cadastrar</RegisterButton>
            </RegisterBox>
          </Section>
        </Box>
      </Row>
      <Modal
        open={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <ModalContainer>
          <h2>Entrar</h2>
          <ModalContent>
            <Input placeholder="E-mail" />
            <Input placeholder="Código da conta" />
            <LoginButton to="/dashboard">Entrar</LoginButton>
          </ModalContent>
        </ModalContainer>
      </Modal>
    </Container>
  );
}

export default Initial;
