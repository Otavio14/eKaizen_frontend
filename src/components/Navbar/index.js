import { Container, Logo, Title, Link } from "./styles";
import logo from "../../logo.png";

export default function Navbar() {
  return (
    <Container>
      <Logo src={logo} />
      <Title>Adota Pet</Title>
      <Link>Início</Link>
      <Link>Sobre</Link>
      <Link>Contato</Link>
      <Link>Pets</Link>
    </Container>
  );
}
