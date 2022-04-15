import { Container, Image, Text, Button, Info } from "./styles";
import { BsInfoLg } from "react-icons/bs";

export default function Card({
  data,
  setShowModalAdopt,
  setShowModalInfo,
  setPetId,
}) {
  return (
    <Container>
      <Image src={data.image} />
      <Text>{data.description}</Text>
      <Button
        onClick={() => {
          setShowModalAdopt(true);
        }}
      >
        Adotar
      </Button>
      <Info
        onClick={() => {
          setShowModalInfo(true);
          setPetId(data.id);
        }}
      >
        <BsInfoLg color="white" />
      </Info>
    </Container>
  );
}
