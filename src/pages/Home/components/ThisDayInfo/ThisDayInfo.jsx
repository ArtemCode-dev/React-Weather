import React from "react";
import s from './ThisDayInfo.module.scss'
import backgroundImg from '../../../../assets/images/weather-background.png'
import { useSelector } from "react-redux";
import ThisDayItem from "./ThisDayItem";

const ThisDayInfo = () => {
    const infoItems = useSelector((state) => state.dayInfo.dayInfo);
    return (
        <div className={s.this_day_info}>
            <div className={s.this_day_items}>
                {infoItems.map((item) => {
                    return <ThisDayItem item = {item} key={item.name}/>
                })}
            </div>
            <img className={s.background_img} src={backgroundImg} alt='background_img'/>
        </div>
    )
}

export default ThisDayInfo