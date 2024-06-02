import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

:root{
    font-size: 62.5%;
}

body{
    font-size: 1.6rem;
    background-color: ${(props) => props.theme["gray-600"]};
}

body, p, input{
     font-family: "Inter", sans-serif;
     line-height: 140%;
}
`;
