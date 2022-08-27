import { WeatherService } from "../../services/WeatherService"
import {currentWeatherSlice} from "../slices/currentWeather-slice";

export const fetchCurrentWeather = (payload) => async (dispatch) => {
    dispatch(currentWeatherSlice.actions.fetchCurrentValue());
    const res = await WeatherService.getCurrentWeather(payload);
    dispatch(currentWeatherSlice.actions.fetchWeatherSuccess(res));
}