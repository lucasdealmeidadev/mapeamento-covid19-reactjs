import axios from 'axios';

function getCountry(country) {
    try {
        const response = await axios.get(`https://coronavirus-19-api.herokuapp.com/countries/${country}`);
        return response.json();
    } catch (error) {
        return error;
    }
}

export default {
    getCountry
}