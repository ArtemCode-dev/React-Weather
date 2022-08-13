import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dayInfo : {
        time: '21:54',
        city: 'Москва',
        degrees: '18°',
        imgId: 'sun'
    }
};

const daySlice = createSlice({
    name:'day',
    initialState,
    reducers : {

    }
});


export default daySlice.reducer