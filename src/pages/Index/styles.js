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
  /* background-color: var(--green-color); */
  background-repeat: repeat;
  /* background-image: url("../../assets/background.png"); */
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
    top: 0;
    border: 1px solid red;
    width: 30px;
    z-index: 1;
    transition: transform 1s;
    transform: ${(props) => `translateX(${props.scrollposition + 40}px)`};
    /* &:hover {
      transform: rotate(45deg);
    } */
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
    /* z-index: -1; */
  }
`;

export const About = styled.div`
  display: grid;
  margin-top: 150px;
  height: 500px;
  width: 60vw;
  /* border: 1px solid red; */
  grid-template-rows: auto 1fr;
  grid-template-areas:
    "i h"
    "i p";
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 50px;
  font-size: 2.5rem;
  color: var(--orange-color);
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  grid-gap: 22px;

  &:after,
  &:before {
    content: " ";
    display: block;
    border-bottom: 2px solid var(--orange-color);
  }
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
