import styled from "styled-components";

export const Container = styled.div`
  height: 80px;
  width: 100%;
  border: 1px solid red;
  display: flex;
  align-items: center;
  position: fixed;
`;

export const LogoDiv = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  border: 1px solid purple;
  justify-content: center;
`;

export const Menu = styled.nav`
  display: flex;
  align-items: center;
  border: 1px solid blue;
  height: 100%;
  width: 100%;
  justify-content: center;
`;

export const Logo = styled.img`
  height: 65px;
  width: 65px;
`;

export const Title = styled.h1``;

export const Link = styled.div`
  cursor: pointer;
  text-align: center;
  font-size: 1.3rem;
  width: 150px;
`;
