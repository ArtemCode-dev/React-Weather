export const selectCurrentWeatherData = (state) => {
    return state.currentWeatherSlice;
}

export const defaultCityValueSelector = (state) => {
    return state.currentWeatherSlice.selectDefaultCityValue;
}

export const themeStyleSelector = (state) => {
    return state.theme.themeStyle.style;
}

export const infoItemsSelector = (state) => {
    return state.dayInfo.dayInfo;
}

export const dayInfoSelector = (state) => {
    return state.day.dayInfo
}

export const mainCitySelector = (state) => {
    return state.currentWeatherSlice.city
}