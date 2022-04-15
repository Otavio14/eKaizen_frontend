import styled from "styled-components";
import { MdClose } from "react-icons/md";

export const Background = styled.div`
  background: rgba(0, 0, 0, 0.8);
  top: 0;
  left: 0;
  display: ${(props) => (props.showModal ? "flex" : "none")};
  position: fixed;
  min-width: 100vw;
  min-height: 100vh;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  z-index: 3;
`;

export const Container = styled.div`
  background-color: #ffffff;
  width: 40vw;
  height: fit-content;
  border-radius: 1.5rem;
  padding: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
`;

export const CloseButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
`;

export const Table = styled.table`
  /* width: 100%; */
  border-collapse: collapse;
  border-radius: 1em 0 0 1em;
  overflow: hidden;
  text-align: center;

  tr:nth-child(even) {
    background-color: var(--light-green-color);
  }

  tr:nth-child(odd) {
    background-color: var(--green-color);
  }

  tr {
    height: 2.5rem;
  }

  th {
    color: white;
    width: 110px;
    background-color: var(--blue-color);
  }

  td {
    border-right: 3px solid var(--blue-color);
    width: 300px;
  }
`;
