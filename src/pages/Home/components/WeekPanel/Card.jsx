import React from "react";
import { useDispatch } from "react-redux";
import GlobalSvgSelector from "../../../../assets/icons/shared/GlobalSvgSelector";
import { changePopUpStatus } from "../../../../store/slices/weekPanel-slice";
import s from './WeekPanel.module.scss';

const Card = ({day}) => {
    const {name, date, info, firstTemperature, secondTemperature, icon_id} = day;

    const dispatch = useDispatch();
    const openInfoPopUp = () => {
        dispatch(changePopUpStatus());
    }
    return (
        <div className={s.card} onClick={openInfoPopUp}>
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