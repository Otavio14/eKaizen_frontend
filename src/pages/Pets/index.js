import { Container, Title, Main, Cards } from "./styles";
import Card from "../../components/Card";
import pets from "../../assets/pets.json";

export default function Pets() {
  return (
    <Container>
      <Main>
        <Title>Adote um Pet!</Title>
        <Cards>
          {pets.data.map((p, i) => (
            <Card data={p} key={i} />
          ))}
        </Cards>
      </Main>
    </Container>
  );
}
