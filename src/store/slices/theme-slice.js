import { createSlice } from "@reduxjs/toolkit";
import { changeCssRootVariables } from "../../model/ChangeRootCssVariables";
import { storage } from "../../model/Storage";

const initialState = {
    themeStyle : {
        style : storage.getItem('theme') || 'light',
    }
};

changeCssRootVariables(initialState.themeStyle.style);

const themeSlice = createSlice({
    name:'themeStyle',
    initialState,
    reducers : {
        changeThemeStyle: (state, action) => {
            storage.setItem('theme', action.payload)
            state.themeStyle.style = action.payload;
            changeCssRootVariables(action.payload);
        }
    }
});

export const {changeThemeStyle} = themeSlice.actions
export default themeSlice.reducer