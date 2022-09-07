import React from "react";
import { useDispatch, useSelector } from "react-redux";
import GlobalSvgSelector from "../../../assets/icons/shared/GlobalSvgSelector";
import { infoItemsSelector } from "../../../store/selectors";
import { changePopUpStatus } from "../../../store/slices/weekPanel-slice";
import ThisDayItem from "../../Home/components/ThisDayInfo/ThisDayItem";
import s from './Popup.module.scss';

const Popup = () => {
    const infoItems = useSelector(infoItemsSelector);

    const dispatch = useDispatch();
    const closePopUp = () => {
        dispatch(changePopUpStatus());
    }

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
                <div className={s.closeButton} onClick={closePopUp}>
                    <GlobalSvgSelector id={'close_button'}/>
                </div>
            </div>
        </>
    )
}

export default Popup