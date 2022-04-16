import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  display: flex;
  width: 50px;
  height: 50px;
  bottom: 20px;
  right: 20px;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: ${(props) =>
    props.scrollposition > 0 ? "var(--blue-color)" : "transparent"};
  transition: background-color 0.5s;
  border-radius: 2rem;
  z-index: 1;
`;
