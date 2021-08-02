import React, { useState } from 'react';
import { StylesProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import GlobalStyle from './commons/styles/global-style';
import Main from './containers/Main';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { Brightness4, Brightness7 } from '@material-ui/icons';
import { ContainerStyled } from './containers/Main/style';

function App() {
    const [localTheme, setLocalTheme] = useState(window.localStorage.getItem('theme'));
    const [darkState, setDarkState] = useState(localTheme == 'dark' ? true : false);
    const palletType = darkState ? 'dark' : 'light';

    const darkTheme = createMuiTheme({
        palette: {
            type: localTheme != null ? localTheme : palletType,
            background: {
                default: localTheme == 'dark' ? '#333' : '#0b85e5',
            }
        },
        typography: {
            useNextVariants: true,
            fontFamily: 'Roboto',
            h4: {
                color: localTheme == 'dark' ? '#fff' : '#3f51b5',
                textAlign: 'center',
                fontWeight: '900',
                marginBottom: '5px',
                textTransform: 'uppercase'
            },
            h6: {
                textAlign: 'center',
                color: localTheme == 'dark' ? '#fff' : '#3f51b5',
                fontSize: '17px'
            }
        }
    });

    const handleThemeChange = () => {
        const getTheme = !darkState ? 'dark' : 'light';

        setDarkState(!darkState);
        setLocalTheme(getTheme);
        window.localStorage.setItem('theme', getTheme);
    }

    return (
        <ThemeProvider theme={darkTheme}>
            <StylesProvider injectFirst>
                <CssBaseline />
                <GlobalStyle />
                <ContainerStyled style={{ maxWidth: '1300px', display: 'flex', placeContent: 'flex-end', alignItems: 'flex-end', color: '#fff', cursor: 'pointer' }}>
                    {
                        localTheme == 'dark'
                            ? <Brightness4 fontSize='large' onClick={handleThemeChange} />
                            : <Brightness7 fontSize='large' onClick={handleThemeChange} />
                    }
                </ContainerStyled>
                <Main />
            </StylesProvider>
        </ThemeProvider>
    )
}

export default App;
