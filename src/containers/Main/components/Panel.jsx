import React, { memo } from 'react';
import { Card, Typography, Button, Select, MenuItem, Grid } from '../../../components';
import COUNTRIES from '../../../commons/constants/countries';
import { CardPanelContentStyled, ItemStyled } from './style';
import styled from 'styled-components';

const navigatorHasShare = navigator.share;

function Panel({ updateAt, onChange, data, country, getCoviddata}) {
    const { cases, recovered, deaths, todayCases, todayDeaths } = data;

    const renderCountries = (country, index) => (
        <MenuItem key={`country-${index}`} value={country.value}>
            <ItemStyled style={{ minWidth: '100%', padding: '5px' }}>
                <div>{country.label}</div>
                <img src={country.flag} alt={`País-${country.label}`} width="25" />
            </ItemStyled>
        </MenuItem>
    );

    const textCovid19 = `País: ${country} - recuperados: ${recovered}`;

    const copyInfo = () => {
        navigator.clipboard.writeText(textCovid19);
    }

    const shareInfo = () => {
        navigator.share({
            title: `Dados do Covid19 - ${country}`,
            text: textCovid19,
            url: '#'
        });
    }

    const renderShareButton = (
        <div>
            <Button variant="contained" color="primary" onClick={shareInfo} style={{ padding: '10px' }}>
                Compartilhar
            </Button>
        </div>
    );

    const renderCopyButton = (
        <div>
            <Button variant="contained" color="primary" onClick={copyInfo} style={{ padding: '10px' }}>
                Copiar
            </Button>
        </div>
    );

    const GridStyled = styled(Grid)`
        display: flex; 
        place-content: center; 
        align-items: center;
        width: 100%;
        padding: 0px;
        margin: 0px;
    `;

    return (
        <Card>
            <CardPanelContentStyled>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={12}>
                        <Typography variant="h4" component="h4">
                            Painel Coronavírus (COVID-19)
                        </Typography>
                    </Grid>

                    <GridStyled item xs={12} md={10}>
                        <Select onChange={onChange} value={country} style={{ minWidth: '100%', border: '1px solid #c6c6c6', borderRadius: '5px' }}>
                            {COUNTRIES.map(renderCountries)}
                        </Select>
                    </GridStyled>

                    <GridStyled item xs={12} md={2}>
                        {navigatorHasShare ? renderShareButton : renderCopyButton}
                    </GridStyled>


                    <GridStyled item xs={12} md={12}>
                        <Typography variant="h6" component="h6">
                            Atualizado: {updateAt}
                        </Typography>
                    </GridStyled>
                </Grid>
            </CardPanelContentStyled>
        </Card>
    );
}

export default memo(Panel);