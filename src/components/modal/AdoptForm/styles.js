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

  @media (max-width: 680px) {
    align-items: flex-start;
  }
`;

export const Container = styled.div`
  background-color: #ffffff;
  max-width: 60vw;
  width: 100%;
  height: fit-content;
  border-radius: 1.5rem;
  padding: 25px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;

  @media (max-width: 1030px) {
    max-width: 80vw;
  }
  @media (max-width: 770px) {
    max-width: 90vw;
  }
  @media (max-width: 680px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FormContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
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

  @media (max-width: 480px) {
    width: 75%;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 1rem;
`;

export const Input = styled.input`
  width: 250px;
  height: 45px;
  border-radius: 0.5rem;
  background-color: lightgray;
  padding: 0 10px;
  border: none;
  font-size: 0.9rem;
`;

export const Label = styled.label`
  margin-left: 5px;
`;

export const Button = styled.button`
  text-transform: uppercase;
  width: 120px;
  background-color: gray;
  border: none;
  border-radius: 1rem;
  height: 30px;
  margin-top: 30px;
  cursor: pointer;
`;
