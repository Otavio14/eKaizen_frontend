import styled from "styled-components";
import { BsInfoLg } from "react-icons/bs";

export const Container = styled.div`
  /* border: 1px solid red; */
  background-color: var(--light-green-color);
  width: 300px;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.1);
  margin: 10px 10px;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  object-fit: cover;
  height: 350px;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  text-align: justify;
  padding: 0 20px;
  color: var(--blue-color);
`;

export const Button = styled.button`
  background-color: var(--blue-color);
  text-transform: uppercase;
  color: white;
  width: 100px;
  height: 30px;
  border-radius: 1rem;
  border: none;
  cursor: pointer;
  margin: 10px 0;
`;

export const Info = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30px;
  height: 30px;
  background-color: var(--blue-color);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-radius: 0.5rem 0 0 0;
`;
