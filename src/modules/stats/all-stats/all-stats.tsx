import React, {useEffect, useState} from 'react';
import './all-stats.scss'
import {useDispatch} from 'react-redux';
import {StatsTable} from '../components/stats-table';
import {CountriesTable} from '../components/countires-table';
import {SearchCountries} from '../components/search-countries';
import {MapWrapper} from '../components/map-wrapper';
import {clearFoundCountries, loadAllStats, setFoundCountries} from '../services/actions';
import {useAppSelector} from '../../../store/hooks';
import {getFoundCountries, getFoundCountriesLength, getGlobalStats} from '../services/selectors';

export const AllStats = () => {
    const dispatch = useDispatch();
    const initialLength = 5;
    const [listLength, setListLength] = useState(initialLength);
    const countriesByLength = useAppSelector(state => getFoundCountries(state, listLength));
    const allCountriesLength = useAppSelector(getFoundCountriesLength);
    const globalStats = useAppSelector(getGlobalStats);

    const onSearchCountries = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setListLength(listLength);

        if (value) {
            dispatch(setFoundCountries({value: value}));
        } else {
            dispatch(clearFoundCountries());
        }
    };

    const seeAll = () => {
        setListLength(Infinity);
    };

    useEffect(() => {
        dispatch(loadAllStats());
    }, [dispatch]);

    return (
        <div className='all-stats'>
            <div className='all-stats__tables'>
                <StatsTable stats={globalStats}/>
                <SearchCountries onChange={onSearchCountries}/>
                <CountriesTable
                    countries={countriesByLength}
                    allCountriesLength={allCountriesLength}
                    seeAll={seeAll}
                />
            </div>
            <div className='all-stats__map'>
                <MapWrapper/>
            </div>
        </div>
    );
};

