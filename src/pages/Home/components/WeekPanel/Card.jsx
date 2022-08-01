import React from "react";
import GlobalSvgSelector from "../../../../assets/icons/shared/GlobalSvgSelector";
import s from './WeekPanel.module.scss';

const Card = ({day}) => {
    const {name, date, info, firstTemperature, secondTemperature, icon_id} = day
    return (
        <div className={s.card}>
            <div className={s.day}>{name}</div>
            <div className={s.date}>{date}</div>
            <div className={s.img}>
                <GlobalSvgSelector id={icon_id}/>
            </div>
            <div className={s.firstTemperature}>{firstTemperature}</div>
            <div className={s.secondTemperature}>{secondTemperature}</div>
            <div className={s.info}>{info}</div>
        </div>
    )
}

export default Card