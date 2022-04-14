import styled from "styled-components";

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  /* padding-top: 80px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--green-color);
`;

export const Background = styled.div`
  position: absolute;
  top: 65%;
  left: 0;
  width: 100%;
  height: fit-content;
  z-index: -1;
  /* border: 1px solid red; */
`;

export const Main = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const About = styled.div`
  display: grid;
  height: 500px;
  width: 60vw;
  /* border: 1px solid red; */
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "i h"
    "i p";
`;

export const Title = styled.h1`
  grid-area: h;
  padding-left: 50px;
`;

export const Text = styled.p`
  align-items: flex-start;
  grid-area: p;
  padding: 50px;
  text-align: justify;
`;

export const Image = styled.img`
  height: 400px;
  grid-area: i;
`;

export const Contact = styled.div`
  width: 60vw;
  /* border: 1px solid red; */
  height: 400px;
  display: grid;
  align-items: center;
  grid-template-columns: 0.7fr 0.3fr;
  grid-template-areas:
    "h l"
    "p l";
`;

export const Links = styled.div`
  grid-area: l;
`;

export const Link = styled.div`
  margin: 20px 10px;
  align-items: center;
  display: flex;

  a {
    text-decoration: none;
    color: black;
  }
`;
