import React, { useState, useRef } from "react";
import {
  Background,
  Container,
  Form,
  CloseButton,
  Title,
  Input,
  Button,
  InputContainer,
  Label,
  FormContent,
} from "./styles";
import Swal from "sweetalert2";

export default function AdoptForm({ showModal, setShowModal }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");
  const [cpf, setCpf] = useState("");
  const [cep, setCep] = useState("");
  const modalRef = useRef();

  async function handleSubmit(e) {
    e.preventDefault();

    if (!nome && !email && !telefone && !dataNascimento && !cpf && !cep) {
      return Swal.fire({
        title: "Atenção!",
        text: "Preencha todos os campos!",
        icon: "warning",
      });
    }

    return Swal.fire({
      title: "Sucesso!",
      text: "Pedido enviado com sucesso!",
      icon: "success",
    });
  }

  async function close() {
    setShowModal(false);
    setNome("");
    setEmail("");
    setTelefone("");
    setDataNascimento("");
    setCpf("");
    setCep("");
  }

  return (
    <Background
      showModal={showModal}
      ref={modalRef}
      onClick={(e) => {
        if (modalRef.current === e.target) {
          close();
        }
      }}
    >
      <Container>
        <Title>Preencha o formulário</Title>
        <Form onSubmit={handleSubmit}>
          <FormContent>
            <InputContainer>
              <Label>Nome Completo</Label>
              <Input
                placeholder="Nome Sobrenome"
                type="name"
                value={nome}
                onChange={(e) => {
                  setNome(e.target.value);
                }}
              />
            </InputContainer>
            <InputContainer>
              <Label>Email</Label>
              <Input
                placeholder="email@email.com"
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </InputContainer>
            <InputContainer>
              <Label>Telefone</Label>
              <Input
                placeholder="(00) 00000-0000"
                type="text"
                value={telefone}
                onChange={(e) => {
                  setTelefone(e.target.value);
                }}
              />
            </InputContainer>
            <InputContainer>
              <Label>Data de Nascimento</Label>
              <Input
                placeholder="Data de Nascimento"
                type="date"
                value={dataNascimento}
                onChange={(e) => {
                  setDataNascimento(e.target.value);
                }}
              />
            </InputContainer>
            <InputContainer>
              <Label>CPF</Label>
              <Input
                placeholder="000.000.000-00"
                type="text"
                value={cpf}
                onChange={(e) => {
                  setCpf(e.target.value);
                }}
              />
            </InputContainer>
            <InputContainer>
              <Label>CEP</Label>
              <Input
                placeholder="00000-000"
                type="text"
                value={cep}
                onChange={(e) => {
                  setCep(e.target.value);
                }}
              />
            </InputContainer>
          </FormContent>
          <Button type="submit">Enviar</Button>
        </Form>
        <CloseButton
          onClick={() => {
            close();
          }}
        />
      </Container>
    </Background>
  );
}
