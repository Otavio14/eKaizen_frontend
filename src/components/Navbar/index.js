import { Container, Logo, Title, Link, LogoDiv, Menu } from "./styles";
import logo from "../../logo.png";

export default function Navbar() {
  return (
    <Container>
      <LogoDiv>
        <Logo src={logo} />
        <Title>Adota Pet</Title>
      </LogoDiv>
      <Menu>
        <Link>Início</Link>
        <Link>Sobre</Link>
        <Link>Contato</Link>
        <Link>Pets</Link>
      </Menu>
    </Container>
  );
}
