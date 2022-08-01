import {configureStore, combineReducers } from '@reduxjs/toolkit';
import dayInfoSlice from './dayInfo-slice';
import weekPanelSlice from './weekPanel-slice';

let reducer = combineReducers({
    dayInfo : dayInfoSlice,
    weekPanel : weekPanelSlice
})

let store = configureStore({reducer, devTools : true});

export default store