import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    dayInfo : [
        {
            name : 'Температура',
            img : 'temperature__img',
            info : '20° - ощущается как 17°'
        },
        {
            name : 'Давление',
            img : 'pressure__img',
            info : '765 мм ртутного столба - нормальное'
        },
        {
            name : 'Осадки',
            img : 'precipitation__img',
            info : 'Без осадков'
        },
        {
            name : 'Ветер',
            img : 'wind__img',
            info : '3 м/с юго-запад - легкий ветер'
        }
    ]
};

const dayInfoSlice = createSlice({
    name:'dayInfo',
    initialState,
    reducers : {

    }
});

// export const {action} = dayInfoSlice.actions
export default dayInfoSlice.reducer