import React, {useEffect, useState} from 'react';
import './all-stats.scss'
import {useDispatch} from 'react-redux';
import {StatsTable} from '../components/stats-table';
import {CountriesTable} from '../components/countires-table';
import {SearchCountries} from '../components/search-countries';
import {StatsMap} from '../components/stats-map';
import {clearFoundCountries, loadAllStats, setFoundCountries} from '../services/actions';
import {useAppSelector} from '../../../store/hooks';
import {getFoundCountries, getGlobal} from '../services/selectors';

export const AllStats = () => {
    const dispatch = useDispatch();
    const [listLength, setListLength] = useState(5);
    const foundCountries = useAppSelector(state => getFoundCountries(state, listLength));
    const global = useAppSelector(getGlobal);

    const onSearchCountries = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setListLength(5);

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
                <StatsTable stats={global}/>
                <SearchCountries onChange={onSearchCountries}/>
                <CountriesTable countries={foundCountries} listLength={listLength} setListLength={setListLength}/>
            </div>
            <div className='all-stats__map'>
                <StatsMap/>
            </div>
        </div>
    );
};

