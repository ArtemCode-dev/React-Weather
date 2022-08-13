import {configureStore, combineReducers } from '@reduxjs/toolkit';
import daySlice from './day-slice';
import dayInfoSlice from './dayInfo-slice';
import themeSlice from './theme-slice';
import weekPanelSlice from './weekPanel-slice';

let reducer = combineReducers({
    day: daySlice,
    dayInfo : dayInfoSlice,
    weekPanel : weekPanelSlice,
    theme : themeSlice,
})

let store = configureStore({reducer, devTools : true});

window.store = store
export default store