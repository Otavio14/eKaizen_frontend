import styled from "styled-components";

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-repeat: repeat;
`;

export const Animation = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 90px;
  position: relative;
  padding: 0 200px;

  .person {
    width: 80px;
    position: absolute;
    top: 0;
  }
  .frisbeemov {
    width: 30px;
    position: absolute;
    top: 0;
    transform: rotate(45deg);
    transition: transform 1s;
    transform: ${(props) => `translateX(${props.scrollposition + 40}px)`};
    display: none;
  }
  .jumping {
    width: 80px;
    transform: scaleX(-1);
    position: absolute;
    display: none;
    top: 0;
  }
  .frisbee {
    position: absolute;
    top: 16px;
    width: 30px;
    z-index: 1;
    transition: transform 1s;
    transform: ${(props) => `translateX(${props.scrollposition + 40}px)`};
  }
  .running {
    width: 80px;
    position: absolute;
    top: 0;
    transition: transform 2s;
    transform: ${(props) => `translateX(${props.scrollposition - 20}px)`};
  }
`;

export const Main = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;

  .custom-shape-divider-bottom-1649962317 {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
    line-height: 0;
  }
`;

export const About = styled.div`
  display: grid;
  margin-top: 150px;
  height: 400px;
  width: 60vw;
  align-items: center;
  justify-content: center;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 90%;
  grid-template-areas:
    "i h"
    "i p";

  @media (max-width: 910px) {
    width: 80vw;
  }

  @media (max-width: 650px) {
    width: 96vw;
  }

  @media (max-width: 450px) {
    h1:nth-child(2) {
      font-size: 1.7rem;
      display: flex;
      justify-content: center;
      &:after,
      &:before {
        display: none;
      }
    }
  }
`;

export const Title = styled.h1`
  text-align: center;
  font-size: 2.5rem;
  color: var(--orange-color);
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  grid-gap: 22px;
  height: fit-content;

  &:after,
  &:before {
    content: " ";
    display: block;
    border-bottom: 2px solid var(--orange-color);
  }

  @media (max-width: 550px) {
    font-size: 2rem;
  }

  @media (max-width: 520px) {
    width: 100%;
  }
`;

export const Text = styled.p`
  grid-area: p;
  align-items: center;
  display: flex;
  padding: 30px;
  text-align: justify;
  height: 100%;

  @media (max-width: 550px) {
    padding: 5px;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  grid-area: i;
  padding-right: 10px;

  @media (min-width: 1300px) {
    object-fit: contain;
  }
`;

export const Contact = styled.div`
  width: 60vw;
  height: 100%;
  margin-top: 150px;
  display: grid;
  align-items: center;
  grid-template-columns: 0.7fr 0.5fr;
  grid-template-areas:
    "h l"
    "p l";

  @media (max-width: 910px) {
    width: 80vw;
  }

  @media (max-width: 650px) {
    width: 96%;
  }

  @media (max-width: 520px) {
    grid-template-columns: 1fr;
    grid-template-areas:
      "h"
      "p"
      "l";

    h1:nth-child(1) {
      padding: 0 5px;
    }
  }
`;

export const Links = styled.div`
  grid-area: l;
  padding-left: 10px;
  width: fit-content;
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
