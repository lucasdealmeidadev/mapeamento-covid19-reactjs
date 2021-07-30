import React, { memo, useCallback, useEffect, useState } from 'react';
import Api from '../../api';

function Main() {
    const [data, setData] = useState({});
    const [country, setCountry] = useState('brazil');

    const getCovidData = useCallback((country) => {
        Api.getCountry(country).then(data => setData(data));
    }, []);

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country]);

    return (
        <ContainerStyled>
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