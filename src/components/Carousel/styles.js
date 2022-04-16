import styled, { keyframes } from "styled-components";

const Animation = keyframes`
  0% {
    margin-left: 0;
  }
  33% {
    margin-left: -100%;
  }
  66% {
    margin-left: -200%;
  }
  100% {
    margin-left: 0;
  }
`;

export const Container = styled.div`
  width: 80vw;
  /* height: 100%; */
  border: 1px solid red;
  display: flex;
  align-items: center;

  .arrowLeft {
    cursor: pointer;
    position: absolute;
    left: 0;
  }
  .arrowRight {
    cursor: pointer;
    position: absolute;
    right: 0;
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

export const Items = styled.div`
  /* border: 1px solid red; */
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;

  &:hover {
    .img1 {
      animation-play-state: paused;
    }
  }

  .img1 {
    /* animation: ${Animation} 10s infinite; */
    /* animation-delay: 5s;
    -webkit-animation-delay: 5s; */
    transition: margin-left 2s;
    margin-left: ${(props) => "-" + props.position + "00%"};
  }
`;

export const Item = styled.div`
  width: 100%;
  height: 100%;
  flex: none;
  object-fit: cover;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
  }
`;
