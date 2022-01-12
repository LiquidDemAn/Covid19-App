import React, {useEffect, useState} from 'react';
import './all-stats.scss'
import {useDispatch} from 'react-redux';
import {StatsTable} from '../components/stats-table';
import {CountriesTable} from '../components/countires-table';
import {SearchCountries} from '../components/search-countries';
import {StatsMap} from '../components/stats-map';
import {clearFoundCountries, loadAllStats, setFoundCountries} from '../services/actions';
import {useAppSelector} from '../../../store/hooks';
import {getFoundCountries, getFoundCountriesLength, getGlobalStats} from '../services/selectors';

export const AllStats = () => {
    const dispatch = useDispatch();
    const initialFilter = 5;
    const [filter, setFilter] = useState(initialFilter);
    const filteredCountries = useAppSelector(state => getFoundCountries(state, filter));
    const countriesLength = useAppSelector(getFoundCountriesLength);
    const globalStats = useAppSelector(getGlobalStats);

    const onSearchCountries = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setFilter(initialFilter);

        if (value) {
            dispatch(setFoundCountries({value: value}));
        } else {
            dispatch(clearFoundCountries());
        }
    };

    useEffect(() => {
        dispatch(loadAllStats());
    }, [dispatch]);

    return (
        <div className='all-stats'>
            <div className='all-stats__tables'>
                <StatsTable stats={globalStats}/>
                <SearchCountries onChange={onSearchCountries}/>
                <CountriesTable countries={filteredCountries} countriesLength={countriesLength} setFilter={setFilter}/>
            </div>
            <div className='all-stats__map'>
                <StatsMap/>
            </div>
        </div>
    );
};

