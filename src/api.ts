import axios from 'axios';

const locationApi = axios.create({
    baseURL: 'http://www.mapquestapi.com',
});

export default locationApi;
