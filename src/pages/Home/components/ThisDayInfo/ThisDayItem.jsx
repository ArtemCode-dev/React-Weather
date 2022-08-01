import React from "react";
import IndicatorSvgSelector from "../../../../assets/icons/indicators/IndicatorSvgSelector";
import s from './ThisDayInfo.module.scss';

const ThisDayItem = ({item}) => {
    const {name, img, info} = item

    return (
        <div className={s.item}>
            <div className={s.indicator}>
                <div className={s.indicator__wrap}>
                    <IndicatorSvgSelector id={img}/>
                </div>
            </div>
            <div className={s.indicator__name}>
                {name}
            </div>
            <div className={s.indicator__value}>
                {info}
            </div>
        </div>
    )
}

export default ThisDayItem