import { createGlobalStyle } from 'styled-components';
import CovidImg from '../../assets/images/covid.jpg';

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
        height: 100vh;
        display: flex;
        padding: 0px;
        margin: 0px;
    }

    #root{
        background: url('${CovidImg}');
        width: 100%;
        height: 100vh;
        background-size: cover;
        background-position: center center;
        background-attachment: fixed;
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