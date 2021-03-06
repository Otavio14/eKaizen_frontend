import React, { useState } from "react";
import { Container, Item, Items } from "./styles";
import Img1 from "../../assets/Imagem 1.jpg";
import Img2 from "../../assets/Imagem 2.jpg";
import Img3 from "../../assets/Imagem 3.jpg";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

export default function Carousel() {
  const [position, setPosition] = useState(0);
  const screenWidth = window.screen.width;

  return (
    <Container>
      <BsChevronLeft
        className="arrowLeft"
        size={screenWidth > 800 ? 80 : 50}
        color={screenWidth > 800 ? "var(--blue-color)" : "var(--orange-color)"}
        onClick={() => {
          setPosition(position > 0 ? position - 1 : 2);
        }}
      />
      <Items position={position}>
        <Item className="img1">
          <img src={Img1} alt="Erro" />
        </Item>
        <Item>
          <img src={Img2} alt="Erro" />
        </Item>
        <Item>
          <img src={Img3} alt="Erro" />
        </Item>
      </Items>
      <BsChevronRight
        className="arrowRight"
        size={screenWidth > 800 ? 80 : 50}
        color={screenWidth > 800 ? "var(--blue-color)" : "var(--orange-color)"}
        onClick={() => {
          setPosition(position < 2 ? position + 1 : 0);
        }}
      />
    </Container>
  );
}
