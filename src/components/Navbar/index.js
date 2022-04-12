import { Container, Logo, Title, Link, LogoDiv, Menu } from "./styles";
import logo from "../../logo.png";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <Container>
      <LogoDiv>
        <Logo src={logo} />
        <Title>Adota Pet</Title>
      </LogoDiv>
      <Menu>
        <Link
          onClick={() => {
            navigate("/");
          }}
        >
          Início
        </Link>
        <Link>Sobre</Link>
        <Link>Contato</Link>
        <Link
          onClick={() => {
            navigate("/pets");
          }}
        >
          Pets
        </Link>
      </Menu>
    </Container>
  );
}
