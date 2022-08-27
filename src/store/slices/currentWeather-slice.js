import { createSlice } from "@reduxjs/toolkit";

const initialState = {
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
        }
    }
});

export const {fetchCurrentValue, fetchWeatherSuccess} = currentWeatherSlice.actions
export default currentWeatherSlice.reducer