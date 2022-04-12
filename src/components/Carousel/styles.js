import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
  /* height: 100%; */
  border: 1px solid red;
  display: flex;
  align-items: center;

  .arrowLeft {
    cursor: pointer;
  }
  .arrowRight {
    cursor: pointer;
  }
`;

export const Items = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 100%;
  overflow: hidden;
  overflow-x: auto;
  display: flex;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  flex: none;
  object-fit: cover;
  scroll-snap-align: start;
`;

