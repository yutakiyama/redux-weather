import axios from 'axios';

const API_KEY = 'b45c2955339a52dc1da1a55ca49317e3';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},us`;
  const request = axios.get(url);

  return {
    type: "FETCH_WEATHER",
    payload: request
  };
}