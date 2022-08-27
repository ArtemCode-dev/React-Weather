import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    week : [
        {
            name : 'Сегодня',
            date : '28 авг',
            icon_id: 'sun',
            info : 'Ясно',
            firstTemperature : '+18°',
            secondTemperature : '+15°',
        },
        {
            name: 'Завтра',
            date: '29 авг',
            icon_id: 'rain',
            info: 'Небольшой дождь',
            firstTemperature: '+15°',
            secondTemperature: '+10°',
        },
        {
            name: 'Пн',
            date: '30 авг',
            icon_id: 'mainly_cloudy',
            info: 'Облачно',
            firstTemperature: '+18°',
            secondTemperature: '+15°',
        },
        {
            name: 'Вт',
            date: '31 авг',
            icon_id: 'mainly_cloudy',
            info: 'Облачно',
            firstTemperature: '+18°',
            secondTemperature: '+15°',
        },
        {
            name: 'Ср',
            date: '1 сен',
            icon_id: 'rain',
            info: 'Дождь',
            firstTemperature: '+18°',
            secondTemperature: '+15°',
        },
        {
            name: 'Чт',
            date: '2 сен',
            icon_id: 'small_rain_and_sun',
            info: 'Небольшой дождь и солнце',
            firstTemperature: '+18°',
            secondTemperature: '+15°',
        },
        {
            name: 'Пт',
            date: '3 сен',
            icon_id: 'mainly_cloudy',
            info: 'Облачно',
            firstTemperature: '+18°',
            secondTemperature: '+15°',
        },
    ]
};

const weekPanelSlice = createSlice({
    name:'weekPanel',
    initialState,
    reducers : {

    }
});

// export const {action} = dayInfoSlice.actions
export default weekPanelSlice.reducer