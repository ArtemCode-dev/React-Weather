import {configureStore, combineReducers } from '@reduxjs/toolkit';
import daySlice from './slices/day-slice';
import dayInfoSlice from './slices/dayInfo-slice';
import themeSlice from './slices/theme-slice';
import weekPanelSlice from './slices/weekPanel-slice';
import currentWeatherSlice from './slices/currentWeather-slice'

let reducer = combineReducers({
    day: daySlice,
    dayInfo : dayInfoSlice,
    weekPanel : weekPanelSlice,
    theme : themeSlice,
    currentWeatherSlice
})

let store = configureStore({
    reducer, 
    devTools : true,
    middleware: getDefaultMiddleware =>
        getDefaultMiddleware({
            serializableCheck: false,
        }),
});

window.store = store
export default store