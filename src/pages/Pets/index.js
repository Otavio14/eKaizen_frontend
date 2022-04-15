import React, { useState } from "react";
import { Container, Title, Main, Cards } from "./styles";
import Card from "../../components/Card";
import pets from "../../assets/pets.json";
import AdoptForm from "../../components/modal/AdoptForm";
import PetInfo from "../../components/modal/PetInfo";

export default function Pets() {
  const [showModalAdopt, setShowModalAdopt] = useState(false);
  const [showModalInfo, setShowModalInfo] = useState(false);
  const [petId, setPetId] = useState(0);

  return (
    <Container>
      <Main>
        <Title>Adote um Pet!</Title>
        <Cards>
          {pets.data.map((p, i) => (
            <Card
              data={p}
              setShowModalAdopt={setShowModalAdopt}
              setShowModalInfo={setShowModalInfo}
              setPetId={setPetId}
              key={i}
            />
          ))}
        </Cards>
      </Main>
      <PetInfo
        showModal={showModalInfo}
        setShowModal={setShowModalInfo}
        petId={petId}
      />
      <AdoptForm showModal={showModalAdopt} setShowModal={setShowModalAdopt} />
    </Container>
  );
}
