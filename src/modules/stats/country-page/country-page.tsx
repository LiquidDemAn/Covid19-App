import React, {useEffect, useState} from 'react';
import './country-page.scss'
import 'react-calendar/dist/Calendar.css';
import {Link, useParams} from 'react-router-dom';
import Calendar from 'react-calendar';
import {useDispatch} from 'react-redux';
import {loadCountryStats} from '../services/actions';
import {CountryChart} from '../components/country-chart';
import {useAppSelector} from '../../../store/hooks';
import {getFirstDate, getLastDate, getPeriod} from '../services/selectors';
import {LinkComponent} from "../../../components/link-component";

export const CountryPage = () => {
    const {country} = useParams();
    const dispatch = useDispatch();
    const [value, onChange] = useState(new Date());
    const period = useAppSelector(state => getPeriod(state, value.toDateString(), 30));
    const maxDate = useAppSelector(getLastDate);
    const minDate = useAppSelector(getFirstDate);

    useEffect(() => {
        dispatch(loadCountryStats(country));
    }, []);

    return (
        <div className='country-page'>
            <h1 className='country-page__title'>Stats of Covid-19 by {country}</h1>
            <div className='country-page__stats'>
                <Calendar
                    maxDate={maxDate}
                    minDate={minDate}
                    onChange={onChange}
                    value={value}
                />
                <div>
                    <CountryChart period={period} country={country}/>
                </div>
            </div>
            <div className='country-page__links'>
                <LinkComponent to='/'>
                    Home
                </LinkComponent>
            </div>
        </div>
    );
};

