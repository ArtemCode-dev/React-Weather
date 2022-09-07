import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCurrentWeatherData } from "../../../store/selectors";
import { fetchCurrentWeather } from "../../../store/thunks/fetchCurrentWeather";
import s from './Home.module.scss';
import ThisDay from "./ThisDay/ThisDay";
import ThisDayInfo from "./ThisDayInfo/ThisDayInfo";
import WeekPanel from "./WeekPanel/WeekPanel";

const Home = () => {

    const mainCity = useSelector((state) => state.currentWeatherSlice.city);
    const dispatch  = useDispatch();
    useEffect(()=> {
        dispatch(fetchCurrentWeather(mainCity))
    }, [mainCity]);
    const {weather} = useSelector(selectCurrentWeatherData);

    return(
        <div className={s.home}>
            <div className={s.thisday__wrap}>
                <ThisDay weather={weather}/>
                <ThisDayInfo />
            </div>
            <WeekPanel />
        </div>
    )
}

export default Home