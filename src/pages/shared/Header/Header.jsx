import GlobalSvgSelector from "../../../assets/icons/shared/GlobalSvgSelector";
import s from './Header.module.scss';
import Select from 'react-select'
import { useDispatch, useSelector } from "react-redux";
import { changeThemeStyle } from "../../../store/slices/theme-slice";
import { defaultCityValueSelector, themeStyleSelector } from "../../../store/selectors";
import { changeCity, changeselectDefaultValue } from "../../../store/slices/currentWeather-slice";

const Header = () => {
    const theme = useSelector(themeStyleSelector);
    const selectDefaultCityValue = useSelector(defaultCityValueSelector);

    const dispatch = useDispatch();

    const changeTheme = () => {
        dispatch(changeThemeStyle(theme === 'light' ? 'dark' : 'light'));
    };

    const changeCityFunc = (city) => {
        dispatch(changeCity(city));
    };
    const changeselectDefaultValueFunc = (city) => {
        dispatch(changeselectDefaultValue(city))
    }

    const options = [
        { value: 'city-1', label: 'Moscow' },
        { value: 'city-2', label: 'Sankt Petersburg' },
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
                    <Select onChange={(value) => {
                        changeCityFunc(value.label);
                        changeselectDefaultValueFunc(value)
                    }} defaultValue={selectDefaultCityValue} styles={colorStules} options={options}/>
                </div>
            </div>
        </header>
    )
}

export default Header