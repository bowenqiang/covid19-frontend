import axios from 'axios';
import { parseDailyData } from './utils';

const ENDPOINT = 'http://localhost:4041/api';

export const fetchCountries = async (callback) => {
    let url = `${ENDPOINT}/countryRef`;
    try {
        const { data : countries } = await axios(url);
        return countries.sort((a, b) => a.Country_Region > b.Country_Region ? 1 : -1);
    } catch (error) {
        if(callback) {
            callback(error);
        }
        return [];
    }
}

export const fetchCovid19Data = async (country, callback) => {
    let url = `${ENDPOINT}/summary?country=${country}`;
    try {
        const { data : covid19Data } = await axios(url);
        return covid19Data;
    } catch (error) {
        if(callback) {
            callback(error);
        }
        return {};
    }
}

export const fetchDailyData = async (country, callback) => {
    let url = `${ENDPOINT}/dailyDetail/country/?country=${country}`;
    try {
        const { data } = await axios(url);
        return parseDailyData(data);
    } catch (error) {
        if(callback) {
            callback(error);
        }
        return [];
    }
}