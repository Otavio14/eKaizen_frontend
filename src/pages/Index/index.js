import { Container, About, Title, Main, Text } from "./styles";
import Carousel from "../../components/Carousel";

export default function Index() {
  return (
    <Container>
      <Main>
        <Carousel />
      </Main>
      <About>
        <Title>Sobre Nós</Title>
        <Text>
          Somos uma comunidade de pessoas, que buscam ajudar nossos queridos
          amigos pets, proporcionando a oportunidade deles encontrarem uma
          família que cuide bem deles. Através da adoção você pode fazer um
          animalzinho muito mais feliz, não cobramos nenhum valor, porém aos que
          puderem ajudar, ficaremos muito gratos.
        </Text>
      </About>
    </Container>
  );
}
