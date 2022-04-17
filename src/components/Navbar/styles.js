import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  align-items: center;
  position: fixed;
  z-index: 2;
  background-color: var(--blue-color);
  transition: height 0.5s;

  @media (max-width: 790px) {
    height: ${(props) => (props.open ? "auto" : "80px")};
    align-items: ${(props) => (props.open ? "flex-start" : "center")};
    flex-direction: ${(props) => (props.open ? "column" : "row")};
    padding-top: ${(props) => (props.open ? "8px" : "0")};
  }
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  justify-content: center;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  height: 100%;
  width: 90%;
  justify-content: center;

  @media (max-width: 790px) {
    width: 300px;
    left: 0;
    flex-direction: column;
    display: ${(props) => (props.open ? "flex" : "none")};
  }
`;

export const Logo = styled.img`
  height: 65px;
  width: 65px;
`;

export const Title = styled.h1`
  color: var(--orange-color);
  font-size: 2rem;
  white-space: nowrap;
  font-family: cursive, Arial !important;
`;

export const Link = styled.div`
  cursor: pointer;
  text-align: center;
  font-size: 1.3rem;
  width: 150px;
  color: white;
  font-weight: bolder;
  transition: font-size 0.3s;

  @media (max-width: 790px) {
    margin: 10px 0;
  }

  &:hover {
    font-size: 1.8rem;
  }
`;
export const MenuButton = styled.div`
  position: absolute;
  top: 0;
  right: 30px;
  height: 80px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;

  div:nth-child(1) {
    transform: ${(props) => (props.open ? "rotate(-45deg)" : "rotate(0)")};
    transform-origin: top right;
  }

  div:nth-child(2) {
    transform: ${(props) => (props.open ? "scaleX(0)" : "scaleX(100%)")};
    transform-origin: right;
  }

  div:nth-child(3) {
    transform: ${(props) => (props.open ? "rotate(45deg)" : "rotate(0)")};
    transform-origin: bottom right;
  }

  @media (min-width: 790px) {
    display: none;
  }

  div {
    transition: all 0.5s;
    margin: 3px 0;
    width: 30px;
    height: 4px;
    border-radius: 1rem;
    background-color: var(--orange-color);
  }
`;
