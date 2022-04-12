import { Container, Item, Items } from "./styles";
import Img1 from "../../assets/Imagem 1.jpg";
import Img2 from "../../assets/Imagem 2.jpg";
import Img3 from "../../assets/Imagem 3.jpg";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";

export default function Carousel() {
  return (
    <Container>
      <BsChevronLeft className="arrowLeft" size={50} onClick={() => {}} />
      <Items
        id="teste"
        onScroll={(event) => {
          // console.log(event.currentTarget.scrollLeft);
        }}
      >
        <Item>
          <img style={{ width: "100%" }} src={Img1} />
        </Item>
        <Item>
          <img style={{ width: "100%" }} src={Img2} />
        </Item>
        <Item>
          <img style={{ width: "100%" }} src={Img3} />
        </Item>
      </Items>
      <BsChevronRight className="arrowRight" size={50} />
    </Container>
  );
}
