import React, { useEffect } from "react";
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
  Background,
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
        {/* <Background>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#7CA484"
              fill-opacity="1"
              d="M0,288L80,256C160,224,320,160,480,165.3C640,171,800,245,960,277.3C1120,309,1280,299,1360,293.3L1440,288L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
            ></path>
          </svg>
        </Background> */}
      </Main>
      <About id="about">
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
      <Contact id="contact">
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
