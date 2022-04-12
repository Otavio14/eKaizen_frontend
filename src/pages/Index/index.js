import {
  Container,
  About,
  Title,
  Main,
  Text,
  Image,
  Contact,
  Links,
  Link,
} from "./styles";
import Carousel from "../../components/Carousel";
import About_Us from "../../assets/about_us.jpg";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FaHandsHelping, FaYoutube } from "react-icons/fa";

export default function Index() {
  return (
    <Container>
      <Main>
        <Carousel />
      </Main>
      <About>
        <Image src={About_Us} />
        <Title>Sobre Nós</Title>
        <Text>
          Somos uma comunidade de pessoas, que buscam ajudar nossos queridos
          amigos pets, proporcionando a oportunidade deles encontrarem uma
          família que cuide bem deles. Através da adoção você pode fazer um
          animalzinho muito mais feliz, não cobramos nenhum valor, porém aos que
          puderem ajudar, ficaremos muito gratos.
        </Text>
      </About>
      <Contact>
        <Title>Contato</Title>
        <Text>
          Deseja tirar alguma dúvida ou nos ajudar nessa missão? Entre em
          contato conosco através de nossas redes sociais!
        </Text>
        <Links>
          <Link>
            <MdEmail size={18} style={{ marginRight: "15px" }} />{" "}
            adotapet@gmail.com
          </Link>
          <Link>
            <FaHandsHelping size={18} style={{ marginRight: "15px" }} />
            <a target="_blank" rel="noreferrer" href="https://apoia.se">
              Apoia-se
            </a>
          </Link>
          <Link>
            <BsTelephoneFill size={18} style={{ marginRight: "15px" }} />
            (19) 98765-4321
          </Link>
          <Link>
            <FaYoutube size={18} style={{ marginRight: "15px" }} />
            <a target="_blank" rel="noreferrer" href="https://youtube.com">
              Youtube
            </a>
          </Link>
        </Links>
      </Contact>
    </Container>
  );
}
