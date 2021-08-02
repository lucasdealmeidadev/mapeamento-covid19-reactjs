import { createGlobalStyle } from 'styled-components';

const globalStyle = createGlobalStyle`
    *{
        outline: none;
        box-sizing: border-box;
    }*

    body{
        line-height: normal;
    }

    html, body{
        width: 100%;
        min-height: 100vh;
        display: flex;
        padding: 0px;
        margin: 0px;
    }

    #root{
        width: 100%;
        min-height: 100vh;
    }

    .mb-2{
        margin-bottom: 16px;
    }

    .pt-2{
        padding-top: 16px;
    }

    .cursor{
        cursor: pointer;
    }
`;

export default globalStyle;