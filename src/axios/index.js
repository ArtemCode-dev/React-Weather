import axios from "axios";

const api = axios.create({
    baseURL: 'https://api.openweathermap.org/data/2.5',
});

api.interceptors.request.use(config => {
    config.url = config.url + '&units=metric' + '&appid=' + '647a63c3e359ce3b930a96ef28f04d75';
    return config;
})

export default api