import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    :root{
        /* Cores globais, para usar chame assim: background-color: var(--red-color) */
        --red-color: #e8343d;
        --blue-color: #2B74E0;
    }
    *{
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
        font-family: Arial, sans-serif;
    }
  }
`;
