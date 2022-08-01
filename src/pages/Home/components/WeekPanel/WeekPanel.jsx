import React from "react";
import { useSelector } from "react-redux";
import s from './WeekPanel.module.scss';
import Card from './Card.jsx'

const WeekPanel = () => {
    const days = useSelector((state) => state.weekPanel.week);
    return (
        <div className={s.week__panel}>
            <div className={s.week__panel_cards}>
                {days.map((item) => (
                    <Card key={item.date} day = {item}/>
                ))}
            </div>
        </div>
    )
}

export default WeekPanel