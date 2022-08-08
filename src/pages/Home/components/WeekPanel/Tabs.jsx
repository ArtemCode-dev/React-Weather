import React from "react";
import s from './WeekPanel.module.scss';

const Tabs = () => {
    const tabs = [
        {
            value: 'На неделю'
        },
        {
            value: 'На месяц'
        },
        {
            value: 'На 10 дней'
        },
    ]

    return (
        <div className={s.tabs}>
            <div className={s.tabs__wrapper}>
                {tabs.map(tab => (
                    <div className={s.tab} key={tab.value}>{tab.value}</div>
                ))}
            </div>
            <div className={s.cancel}>Отменить</div>
        </div>
    )
}

export default Tabs