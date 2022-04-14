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
        <Link
          onClick={() => {
            if (window.location.pathname !== "/") navigate("/");
            setTimeout(() => {
              window.scrollTo({
                top:
                  document.querySelector("#about").getBoundingClientRect().top +
                  window.pageYOffset -
                  80,
                behavior: "smooth",
              });
            }, 500);
          }}
        >
          Sobre
        </Link>
        <Link
          onClick={() => {
            if (window.location.pathname !== "/") navigate("/");
            setTimeout(() => {
              window.scrollTo({
                top:
                  document.querySelector("#contact").getBoundingClientRect()
                    .top +
                  window.pageYOffset -
                  80,
                behavior: "smooth",
              });
            }, 500);
          }}
        >
          Contato
        </Link>
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
