import React from "react";
import { useSelector } from "react-redux";
import GlobalSvgSelector from "../../../assets/icons/shared/GlobalSvgSelector";
import ThisDayItem from "../../Home/components/ThisDayInfo/ThisDayItem";
import s from './Popup.module.scss';

const Popup = () => {
    const infoItems = useSelector((state) => state.dayInfo.dayInfo)

    return(
        <>
            <div className={s.blur}></div>
            <div className={s.popup}>
                <div className={s.day}>
                    <div className={s.day__temp}>18°</div>
                    <div className={s.day__name}>Суббота</div>
                    <div className={s.img}>
                        <GlobalSvgSelector id='sun' />
                    </div>
                    <div>
                        <div className={s.day__time}>Время 23:40</div>
                        <div className={s.day__city}>Город: Москва</div>
                    </div>
                </div>
                <div className={s.popup__items}>
                    {infoItems.map((item) => {
                        return <ThisDayItem item = {item} key={item.name}/>
                    })}
                </div>
                <div className={s.closeButton}>
                    <GlobalSvgSelector id={'close_button'}/>
                </div>
            </div>
        </>
    )
}

export default Popup