import React, {useEffect, useState} from 'react';
import './country-stats.scss'
import 'react-calendar/dist/Calendar.css';
import {Link, useParams} from 'react-router-dom';
import Calendar from 'react-calendar';
import {useDispatch} from 'react-redux';
import {loadCountryStats, loadProvincesStats} from '../services/actions';
import {CountryChart} from '../components/country-chart';
import {useAppSelector} from '../../../store/hooks';
import {getMinDate, getMaxDate, getStatsByPeriod, getProvinces} from '../services/selectors';
import {PeriodsButtons} from '../components/periods-buttons';
import {Button} from 'react-bootstrap';
import {ProvincesTable} from '../components/provinces-table';

export const CountryStats = () => {
    const {countryName} = useParams();
    const dispatch = useDispatch();
    const allowedPeriods = [7, 14, 30, 60];
    const [period, setPeriod] = useState(allowedPeriods[0]);
    const minDate = useAppSelector(getMinDate);
    const maxDate = useAppSelector(getMaxDate);
    const [date, setDate] = useState(maxDate);
    const statsByPeriod = useAppSelector(state => getStatsByPeriod(state, date, period));
    const provinces = useAppSelector(state => getProvinces(state, date))

    const selectPeriod = (period: number) => {
        setPeriod(period)
    }

    useEffect(() => {
        dispatch(loadCountryStats(countryName));
        dispatch(loadProvincesStats(countryName));
    }, []);

    useEffect(() => {
        setDate(maxDate)
    }, [maxDate])

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
                <PeriodsButtons selectPeriod={selectPeriod} allowedPeriods={allowedPeriods}/>
                <CountryChart stats={statsByPeriod}/>
            </div>

            <div className='country-stats__provinces'>
                <h2>Statistics by provinces for {date.toLocaleDateString()}</h2>
                <ProvincesTable provinces={provinces}/>
            </div>

        </div>
    );
};

