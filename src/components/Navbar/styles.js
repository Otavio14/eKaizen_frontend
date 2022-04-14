import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  align-items: center;
  position: fixed;
  background-color: rgba(161, 193, 129, 0.5);
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  /* border: 1px solid purple; */
  justify-content: center;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  /* border: 1px solid blue; */
  height: 100%;
  width: 100%;
  justify-content: center;
`;

export const Logo = styled.img`
  height: 65px;
  width: 65px;
`;

export const Title = styled.h1`
  color: var(--blue-color);
  /* text-transform: uppercase; */
  font-family: cursive, Arial !important;
`;

export const Link = styled.div`
  cursor: pointer;
  text-align: center;
  font-size: 1.3rem;
  width: 150px;
  color: white;
  font-weight: bolder;
`;
