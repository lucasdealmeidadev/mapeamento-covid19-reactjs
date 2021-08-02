import React, { memo, useCallback, useEffect, useState } from 'react';
import Api from '../../api';
import Board from './components/Board';
import Panel from './components/Panel';
import { ContainerStyled } from './style';

function Main() {
    const [data, setData] = useState({});
    const [country, setCountry] = useState('brazil');
    const updateAt = new Date().toLocaleDateString('pt-br', { dateStyle: 'full' });

    const getCovidData = useCallback((country) => {
        Api.getCountry(country).then(response => setData(response.data));
    }, []);

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country]);

    const handleChange = ({ target }) => {
        const country = target.value;
        setCountry(country);
    }

    return (
        <ContainerStyled style={{ maxWidth: '1300px' }}>
            <div className="mb-2">
                <Panel
                    data={data}
                    updateAt={updateAt}
                    onChange={handleChange}
                    country={country}
                    getCovidData={getCovidData}
                />
            </div>
            <Board data={data} />
        </ContainerStyled>
    );
}

export default memo(Main);