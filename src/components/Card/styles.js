import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid red;
  width: 300px;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
`;

export const Image = styled.img`
  width: 200px;
  object-fit: cover;
`;

export const Text = styled.p``;

export const Button = styled.button`
    text-transform: uppercase;
    width: 100px;
    height: 30px;
    border-radius: 1rem;
    border: none;
    cursor: pointer;
`;
