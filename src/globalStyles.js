import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        --blue-color: #233D4D;
        --orange-color: #FE7F2D;
        --yellow-color: #FCCA46;
        --green-color: #A1C181;
        --light-green-color: #d6f1ba;
        --light-blue-color: #619B8A;
    }
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: Arial, sans-serif;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        -khtml-user-select: none;
        &::-webkit-scrollbar {
            width: 8px;
            background-color: var(--blue-color);
            color: white;
        }
        &::-webkit-scrollbar-thumb {
            background-color: var(--orange-color);
            border-radius: 1rem;
        }
    }
    body {
        overflow-x: hidden;
    }
  }
`;
