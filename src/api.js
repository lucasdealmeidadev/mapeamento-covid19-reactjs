import axios from 'axios';

function getCountry(country) {
    try {
        return axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${country}`);
    } catch (error) {
        return error;
    }
}

export default {
    getCountry
}