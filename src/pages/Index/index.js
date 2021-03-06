import React, { useEffect, useState } from "react";
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
  Animation,
} from "./styles";
import Carousel from "../../components/Carousel";
import About_Us from "../../assets/about_us.jpg";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FaHandsHelping, FaYoutube } from "react-icons/fa";
import Svg from "../../assets/background.png";
import Frisbee from "../../assets/frisbee.png";
import Person from "../../assets/person.png";
import Running from "../../assets/running.png";

export default function Index() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const screenHeight = window.screen.height;
  const screenWidth = window.screen.width;
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <Container>
      <Main style={{ backgroundImage: `url(${Svg})` }}>
        <Carousel />
        <div className="custom-shape-divider-bottom-1649962317">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            fill="white"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </Main>
      <Animation
        scrollposition={scrollPosition}
        screenheight={screenHeight}
        screenwidth={screenWidth}
      >
        <img src={Person} className="person" alt="Error" />
        <img src={Frisbee} className="frisbee" alt="Error" />
        <img src={Running} className="running" alt="Error" />
      </Animation>
      <About id="about">
        <Image src={About_Us} />
        <Title>Sobre N??s</Title>
        <Text>
          Somos uma comunidade de pessoas, que buscam ajudar nossos queridos
          amigos pets, proporcionando a oportunidade deles encontrarem uma
          fam??lia que cuide bem deles. Totalmente sem fins lucrativos,
          arrecadamos doa????es e aceitamos volunt??rios que estejam interessados
          em se juntar ?? n??s nessa miss??o t??o importante.
        </Text>
      </About>
      <Contact id="contact">
        <Title>Contato</Title>
        <Text>
          Deseja tirar alguma d??vida ou nos ajudar nessa miss??o? Entre em
          contato conosco atrav??s de nossas redes sociais!
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
