import React, {useEffect, useState} from 'react';
import './country-page.scss'
import 'react-calendar/dist/Calendar.css';
import {useParams} from 'react-router-dom';
import Calendar from 'react-calendar';
import {useDispatch} from 'react-redux';
import {loadCountryStats} from '../services/actions';
import {CountryChart} from '../components/country-chart';
import {useAppSelector} from '../../../store/hooks';
import {getMinDate, getMaxDate, getPeriod} from '../services/selectors';
import {LinkComponent} from '../../../components/link-component';

export const CountryPage = () => {
    const {countryName} = useParams();
    const dispatch = useDispatch();
    const [date, setDate] = useState(new Date());
    const period = useAppSelector(state => getPeriod(state, date.toDateString(), 30));
    const maxDate = useAppSelector(getMaxDate);
    const minDate = useAppSelector(getMinDate);

    useEffect(() => {
        dispatch(loadCountryStats(countryName));
    }, []);

    return (
        <div className='country-page'>
            <h1 className='country-page__title'>Stats of Covid-19 by {countryName}</h1>
            <div className='country-page__stats'>
                <Calendar
                    maxDate={maxDate}
                    minDate={minDate}
                    onChange={setDate}
                    value={date}
                />
                <div>
                    <CountryChart period={period}/>
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

