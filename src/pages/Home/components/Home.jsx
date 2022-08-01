import React from "react";
import s from './Home.module.scss';
import ThisDay from "./ThisDay/ThisDay";
import ThisDayInfo from "./ThisDayInfo/ThisDayInfo";
import WeekPanel from "./WeekPanel/WeekPanel";

const Home = () => {
    return(
        <div className={s.home}>
            <div className={s.thisday__wrap}>
                <ThisDay />
                <ThisDayInfo />
            </div>
            <WeekPanel />
        </div>
    )
}

export default Home