import React, {useEffect, useState} from 'react';
import './country-stats.scss'
import 'react-calendar/dist/Calendar.css';
import {Link, useParams} from 'react-router-dom';
import Calendar from 'react-calendar';
import {useDispatch} from 'react-redux';
import {loadCountryStats} from '../services/actions';
import {CountryChart} from '../components/country-chart';
import {useAppSelector} from '../../../store/hooks';
import {getMinDate, getMaxDate, getStatsByPeriod} from '../services/selectors';
import {Button} from 'react-bootstrap';
import {SelectPeriod} from "../components/select-period";

export const CountryStats = () => {
    const {countryName} = useParams();
    const dispatch = useDispatch();
    const initialPeriod = 7;
    const [period, setPeriod] = useState(initialPeriod);
    const minDate = useAppSelector(getMinDate);
    const maxDate = useAppSelector(getMaxDate);
    const [date, setDate] = useState(maxDate);
    const statsByPeriod = useAppSelector(state => getStatsByPeriod(state, date, period));

    const selectPeriodHandler = (period: number) => {
        if (period <= 0) {
            setPeriod(initialPeriod);
        } else {
            setPeriod(period);
        }
    };

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
            <h1 className='country-stats__title'>Stats of Covid-19 by {countryName}</h1>

            <div className='country-stats__links'>
                <Link to='/'>
                    <Button size='lg'>
                        All Stats
                    </Button>
                </Link>
            </div>

            <div className='country-stats__chart'>
                <Calendar
                    maxDate={maxDate}
                    minDate={minDate}
                    onChange={setDate}
                    value={date}
                />
                <SelectPeriod period={period} selectPeriodHandler={selectPeriodHandler}/>
                {/*<PeriodsButtons selectPeriodHandler={selectPeriodHandler} periods={periods}/>*/}
                <CountryChart stats={statsByPeriod}/>
            </div>
        </div>
    );
};

