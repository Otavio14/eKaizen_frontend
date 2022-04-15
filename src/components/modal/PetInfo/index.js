import React, { useRef, useState, useEffect } from "react";
import { Background, Container, CloseButton, Title, Table } from "./styles";
import pets from "../../../assets/pets.json";

export default function PetInfo({ showModal, setShowModal, petId }) {
  const [exists, setExists] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    setExists(pets.data.filter((p) => p.id === petId).length > 0);
  }, [petId]);

  return (
    <Background
      showModal={showModal}
      ref={modalRef}
      onClick={(e) => {
        if (modalRef.current === e.target) {
          setShowModal(false);
        }
      }}
    >
      <Container>
        <Title>Dados do Pet</Title>
        <Table>
          <tbody>
            <tr>
              <th>Nome</th>
              <td>
                {exists ? pets.data.filter((p) => p.id === petId)[0].name : "-"}
              </td>
            </tr>
            <tr>
              <th>Animal</th>
              <td>
                {exists
                  ? pets.data.filter((p) => p.id === petId)[0].animal
                  : "-"}
              </td>
            </tr>
            <tr>
              <th>Idade</th>
              <td>
                {exists ? pets.data.filter((p) => p.id === petId)[0].age : "-"}
              </td>
            </tr>
            <tr>
              <th>Sexo</th>
              <td>
                {exists
                  ? pets.data.filter((p) => p.id === petId)[0].gender
                  : "-"}
              </td>
            </tr>
            <tr>
              <th>Raça</th>
              <td>
                {exists
                  ? pets.data.filter((p) => p.id === petId)[0].breed
                  : "-"}
              </td>
            </tr>
          </tbody>
        </Table>
        <CloseButton
          onClick={() => {
            setShowModal(false);
          }}
        />
      </Container>
    </Background>
  );
}
