import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { Grid, Skeleton } from '../../../components';
import Card from './Card';

function Board({ data }) {
    const { cases, 
            todayDeaths, 
            recovered, 
            deaths, 
            todayCases, 
            active, 
            critical,
            casesPerOneMillion,
            deathsPerOneMillion ,
            totalTests,
            testsPerOneMillion
        } = data;

    const getValue = (value) => {
        if (value === 0) return 0;

        return value ? value.toLocaleString('pt-br') : <Skeleton variant="text" width='100%' height={60} />
    }

    return (
        <Grid container spacing={3}>
            <Grid item xs={12} md={3}>
                <Card value={getValue(cases)} label="Total de Casos" color="#5d78ff"/>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(todayCases)} label="Casos Hoje" color="#000" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(critical)} label="Casos Críticos" color="#3f51b5" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(active)} label="Casos Ativos" color="#3BB2B8" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(casesPerOneMillion)} label="Casos por Milhão de Habitantes" color="#ffeb3b" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(totalTests)} label="Total de Testes" color="#aa2e25" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(testsPerOneMillion)} label="Teste por Milhão de Habitantes" color="#52b202" />
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value={getValue(todayDeaths)} label="Óbitos hoje" color="#F7B829" />
            </Grid>
            <Grid item xs={12} md={4}>
                <Card value={getValue(deathsPerOneMillion)} label="Mortes por Milhão de Habitantes" color="#ff5722" />
            </Grid>
            <Grid item xs={12} md={4}>
                <Card value={getValue(deaths)} label="Total de Mortes" color="#E95078" />
            </Grid>
            <Grid item xs={12} md={4}>
                <Card value={getValue(recovered)} label="Total de Recuperados" color="#67C887" />
            </Grid>
        </Grid>
    )
}

export default memo(Board);