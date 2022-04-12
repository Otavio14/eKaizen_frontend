import { Container, Image, Text, Button } from "./styles";

export default function Card({ data }) {
  return (
    <Container>
      <Image src={data.image} />
      <Text>{data.description}</Text>
      <Button>Adotar</Button>
    </Container>
  );
}
