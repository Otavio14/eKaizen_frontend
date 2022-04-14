import styled from "styled-components";

export const Container = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 200px;
`;

export const Main = styled.div`
  width: 80vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  /* border: 1px solid red; */
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 50px;
  font-size: 2.5rem;
  color: var(--orange-color);
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;
