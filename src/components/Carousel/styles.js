import styled from "styled-components";

export const Container = styled.div`
  width: 80vw;
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
  width: 100%;
  height: 100%;
  overflow: hidden;
  display: flex;

  .img1 {
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
