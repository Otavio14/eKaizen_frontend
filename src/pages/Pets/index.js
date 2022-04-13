import React, { useState } from "react";
import { Container, Title, Main, Cards } from "./styles";
import Card from "../../components/Card";
import pets from "../../assets/pets.json";
import AdoptForm from "../../components/modal/AdoptForm";

export default function Pets() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <Main>
        <Title>Adote um Pet!</Title>
        <Cards>
          {pets.data.map((p, i) => (
            <Card data={p} setShowModal={setShowModal} key={i} />
          ))}
        </Cards>
      </Main>
      <AdoptForm showModal={showModal} setShowModal={setShowModal} />
    </Container>
  );
}
