import React, {useCallback, useEffect, useState} from 'react';
import './country-stats.scss'
import 'react-calendar/dist/Calendar.css';
import {Link, useParams} from 'react-router-dom';
import Calendar from 'react-calendar';
import {useDispatch} from 'react-redux';
import {CountryChart} from '../components/country-chart';
import {useAppSelector} from '../../../store/hooks';
import {getMinDate, getMaxDate, getStatsByPeriod} from '../services/selectors';
import {Button} from 'react-bootstrap';
import {SelectPeriod} from '../components/select-period';
import {loadCountryStats} from '../services/actions';

export const CountryStats = () => {
    const {countryName} = useParams();
    const dispatch = useDispatch();
    const initialPeriod = 7;
    const [period, setPeriod] = useState(initialPeriod);
    const minDate = useAppSelector(getMinDate);
    const maxDate = useAppSelector(getMaxDate);
    const [date, setDate] = useState(maxDate);
    const statsByPeriod = useAppSelector(state => getStatsByPeriod(state, date, period));

    const selectPeriodHandler = useCallback((period: number) => {
        if (period <= 0) {
            setPeriod(initialPeriod);
        } else {
            setPeriod(period);
        }
    }, []);

    useEffect(() => {
        if (countryName) {
            dispatch(loadCountryStats(countryName));
        }
    }, [dispatch, countryName]);

    useEffect(() => {
        setDate(maxDate);
    }, [maxDate]);

    return (
        <div className='country-stats'>
            <header className='country-stats__header'>
                <h1 className='country-stats__title'>Stats of Covid-19 by {countryName}</h1>
                <Link to='/'>
                    <Button size='lg'>
                        All Stats
                    </Button>
                </Link>
            </header>

            <main className='country-stats__main'>
                <Calendar
                    maxDate={maxDate}
                    minDate={minDate}
                    onChange={setDate}
                    value={date}
                />
                <SelectPeriod period={period} selectPeriodHandler={selectPeriodHandler}/>
                <CountryChart stats={statsByPeriod}/>
            </main>
        </div>
    );
};

