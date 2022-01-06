import React, {useEffect, useState} from 'react';
import 'react-calendar/dist/Calendar.css';
import {useParams} from 'react-router-dom';
import Calendar from 'react-calendar';
import {useDispatch} from "react-redux";
import {loadCountryStats} from "../services/actions";
import {CountryChart} from "../components/country-chart";
import {useAppSelector} from "../../../store/hooks";
import {getFirstDate, getLastDate, getPeriod} from "../services/selectors";

export const CountryPage = () => {
    const {country} = useParams();
    const dispatch = useDispatch();
    const [value, onChange] = useState(new Date());
    const maxDate = useAppSelector(getLastDate)
    const period = useAppSelector(state => getPeriod(state, value.toDateString(), 30));
    const minDate = useAppSelector(getFirstDate)

    useEffect(() => {
        dispatch(loadCountryStats(country));
    }, []);

    return (
        <div>
            <h1>{country}</h1>
            <div className='d-flex justify-content-around'>
                <Calendar
                    maxDate={maxDate}
                    minDate={minDate}
                    onChange={onChange}
                    value={value}
                />
                <div>
                    <CountryChart period={period}/>
                </div>
            </div>
        </div>
    );
};

