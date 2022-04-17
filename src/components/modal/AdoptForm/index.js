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
import InputMask from "react-input-mask";
import "./styles.css";

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

    if (
      !nome ||
      !email ||
      !telefone ||
      !dataNascimento ||
      !cpf ||
      !cep ||
      !nome.includes(" ") ||
      telefone.replaceAll("_", "").length < 15 ||
      cpf.replaceAll("_", "").length < 14 ||
      cep.replaceAll("_", "").length < 9
    ) {
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
                required
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
                required
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
            </InputContainer>
            <InputContainer>
              <Label>Telefone</Label>
              <InputMask
                className="input"
                mask="(99) 99999-9999"
                placeholder="(00) 00000-0000"
                type="text"
                required
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
                required
                value={dataNascimento}
                onChange={(e) => {
                  setDataNascimento(e.target.value);
                }}
              />
            </InputContainer>
            <InputContainer>
              <Label>CPF</Label>
              <InputMask
                className="input"
                mask="999.999.999-99"
                placeholder="000.000.000-00"
                type="text"
                required
                value={cpf}
                onChange={(e) => {
                  setCpf(e.target.value);
                }}
              />
            </InputContainer>
            <InputContainer>
              <Label>CEP</Label>
              <InputMask
                className="input"
                mask="99999-999"
                placeholder="00000-000"
                type="text"
                required
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
