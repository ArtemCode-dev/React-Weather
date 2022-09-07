import React from "react";
import s from './ThisDay.module.scss';
import GlobalSvgSelector from '../../../../assets/icons/shared/GlobalSvgSelector'
import { useSelector } from "react-redux";
import { dayInfoSelector, mainCitySelector } from "../../../../store/selectors";

const ThisDay = ({weather}) => {
    const day = useSelector(dayInfoSelector);
    const mainCity = useSelector(mainCitySelector);
    return (
        <div className={s.this__day}>
            <div className={s.top__block}>
                <div className={s.top__block_wrapper}>
                    <div className={s.this__temp}>
                        {Math.floor(weather.main.temp)}°
                    </div>
                    <div className={s.this__day_name}>
                        Сегодня
                    </div>
                </div>
                <GlobalSvgSelector id={day.imgId}/>
            </div>
            <div className={s.bottom__block}>
                <div className={s.this__city}>
                    Город: <span>{mainCity}</span>
                </div>
            </div>
        </div>
    )
}

export default ThisDay