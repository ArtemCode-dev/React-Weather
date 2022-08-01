import React from "react";
import GlobalSvgSelector from "../../../assets/icons/shared/GlobalSvgSelector";
import s from './Header.module.scss';
import Select from 'react-select'

const Header = () => {
    const options = [
        { value: 'city-1', label: 'Moscow' },
        { value: 'city-2', label: 'Sankt - Petersburg' },
        { value: 'city-3', label: 'Novgorod' }
    ];

    const colorStules = {
        control : (styles) => ({
            ...styles,
            backgroundColor : 'rgba(71, 147, 255, 0.2)',
            width : '194px',
            heigth : '37px',
            border : 'none',
            borderRadius : '10px',
            zIndex : '100',
        })
    }

    return(
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}>
                    <GlobalSvgSelector id={'header-logo'}/>
                </div>
                <div className={s.title}>React weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme}>
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