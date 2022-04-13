import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        /* Cores globais, para usar chame assim: background-color: var(--red-color) */
        --light-blue-color: #7CCCE4;
        --green-color: #7CA484;
        --blue-color: #0494CB;
        --yellow-color: #F3A246;
    }
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: Arial, sans-serif;
        overflow-x: hidden;
        user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
        -ms-user-select: none;
        -khtml-user-select: none;
    }
    body {
        &::-webkit-scrollbar {
            width: 8px;
            background-color: gray;
            color: white;
        }
        &::-webkit-scrollbar-thumb {
            background-color: lightgray;
            border-radius: 1rem;
        }
    }
  }
`;
