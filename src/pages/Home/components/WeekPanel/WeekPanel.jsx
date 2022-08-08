import React from "react";
import { useSelector } from "react-redux";
import s from './WeekPanel.module.scss';
import Card from './Card.jsx'
import Tabs from "./Tabs";

const WeekPanel = () => {
    const days = useSelector((state) => state.weekPanel.week);
    return (
        <div className={s.week__panel}>
            <Tabs />
            <div className={s.week__panel_cards}>
                {days.map((item) => (
                    <Card key={item.date} day = {item}/>
                ))}
            </div>
        </div>
    )
}

export default WeekPanel