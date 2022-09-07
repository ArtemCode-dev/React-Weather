import { createSlice } from "@reduxjs/toolkit";
import { storage } from "../../model/Storage";

const initialState = {
    city: storage.getItem('city') || 'Moscow',
    selectDefaultCityValue : storage.getItem('selectDefaultCityValue') || { value: 'city-1', label: 'Moscow' },
    weather : {
        main : {
            temp : 0,
        }
    },
    isLoading: false,
    responce: {
        status: 0,
        message: '',
    },
};

export const currentWeatherSlice = createSlice({
    name:'current_weather',
    initialState,
    reducers : {
        fetchCurrentValue(state) {
            state.isLoading = true;
        },
        fetchWeatherSuccess(state, action) {
            state.weather = action.payload.data;
            state.isLoading = false;
            state.responce = {
                status: action.payload.status,
                message: action.payload.message,
            }
        },
        changeCity(state, action) {
            storage.setItem('city', action.payload)
            state.city = action.payload
        },
        changeselectDefaultValue(state, action) {
            storage.setItem('selectDefaultCityValue', action.payload)
            state.selectDefaultCityValue = action.payload
        }
    }
});

export const {fetchCurrentValue, fetchWeatherSuccess, changeCity, changeselectDefaultValue} = currentWeatherSlice.actions
export default currentWeatherSlice.reducer