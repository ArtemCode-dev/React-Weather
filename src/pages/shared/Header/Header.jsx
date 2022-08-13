import React, { useState } from "react";
import GlobalSvgSelector from "../../../assets/icons/shared/GlobalSvgSelector";
import s from './Header.module.scss';
import Select from 'react-select'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { changeThemeStyle } from "../../../store/theme-slice";

const Header = () => {
    const theme = useSelector((state => state.theme.themeStyle.style));

    const dispatch = useDispatch();

    const changeTheme = () => {
        dispatch(changeThemeStyle(theme === 'light' ? 'dark' : 'light'));
    };

    const options = [
        { value: 'city-1', label: 'Moscow' },
        { value: 'city-2', label: 'Sankt - Petersburg' },
        { value: 'city-3', label: 'Novgorod' }
    ];

    const colorStules = {
        control : (styles) => ({
            ...styles,
            backgroundColor : theme === 'dark' ? '#4F4F4F' : 'rgba(71, 147, 255, 0.2)',
            width : '194px',
            heigth : '37px',
            border : 'none',
            borderRadius : '10px',
            zIndex : '100',
            fontFamily: 'Montserrat',
        }),
        singleValue: (styles) => ({
            ...styles,
            color: theme === 'dark' ? '#fff' : '#000' 
        }),
        menu: (styles) => ({
            ...styles,
            color: theme === 'dark' ? '#fff' : '#000',
            fontFamily: 'Montserrat',
            backgroundColor: theme === 'dark' ? '#4F4F4F' : '#fff',
        }),
        option: (styles) => ({
            ...styles,
            '&:hover': { backgroundColor: 'rgba(71, 147, 255, 0.2)' },
        })
    };

    return(
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSvgSelector id={'header-logo'}/>
                </div>
                <div className={s.title}>React weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme} onClick={changeTheme}>
                    <GlobalSvgSelector id={'change-theme-svg'} />
                </div>
                <div className={s.headerSelector}>
                    <Select defaultValue={options[0]} styles={colorStules} options={options}/>
                </div>
            </div>
        </header>
    )
}

export default Header