import { Container, Image, Text, Button } from "./styles";

export default function Card({ data, setShowModal }) {
  return (
    <Container>
      <Image src={data.image} />
      <Text>{data.description}</Text>
      <Button
        onClick={() => {
          setShowModal(true);
        }}
      >
        Adotar
      </Button>
    </Container>
  );
}
