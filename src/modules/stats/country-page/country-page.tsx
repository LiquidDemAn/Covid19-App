import React, {useEffect, useState} from 'react';
import './country-page.scss'
import 'react-calendar/dist/Calendar.css';
import {useParams} from 'react-router-dom';
import Calendar from 'react-calendar';
import {useDispatch} from 'react-redux';
import {loadCountryStats} from '../services/actions';
import {CountryChart} from '../components/country-chart';
import {useAppSelector} from '../../../store/hooks';
import {getMinDate, getMaxDate, getStatsByPeriod} from '../services/selectors';
import {LinkComponent} from '../../../components/link-component';
import {PeriodsButtons} from '../components/periods-buttons';

export const CountryPage = () => {
    const {countryName} = useParams();
    const dispatch = useDispatch();
    const allowedPeriods = [7, 14, 30, 60];
    const [period, setPeriod] = useState(allowedPeriods[0]);
    const minDate = useAppSelector(getMinDate);
    const maxDate = useAppSelector(getMaxDate);
    const [date, setDate] = useState(maxDate);
    const statsByPeriod = useAppSelector(state => getStatsByPeriod(state, date, period));

    useEffect(() => {
        dispatch(loadCountryStats(countryName));
    }, []);

    useEffect(() => {
        setDate(maxDate)
    }, [maxDate])

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
                <PeriodsButtons setPeriod={setPeriod} allowedPeriods={allowedPeriods}/>
                <CountryChart stats={statsByPeriod}/>
            </div>

            <div className='country-page__links'>
                <LinkComponent to='/'>
                    Home
                </LinkComponent>
            </div>
        </div>
    );
};

