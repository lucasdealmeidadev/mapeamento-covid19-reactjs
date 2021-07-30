import React, { memo, useCallback, useEffect, useState } from 'react';
import Api from '../../api';
import Board from './components/Board';
import { ContainerStyled } from './style';

function Main() {
    const [data, setData] = useState({});
    const [country, setCountry] = useState('brazil');

    const getCovidData = useCallback((country) => {
        Api.getCountry(country).then(response => setData(response.data));
    }, []);

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country]);

    return (
        <ContainerStyled>
            <Board data={data} />
        </ContainerStyled>
    );
}

export default memo(Main);