import axios from 'axios';

async function getCountry(country) {
    try {
        return await axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${country}`);
    } catch (error) {
        return error;
    }
}

export default {
    getCountry
}