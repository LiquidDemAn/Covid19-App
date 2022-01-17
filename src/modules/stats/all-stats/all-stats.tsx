import React, {useEffect, useState} from 'react';
import './all-stats.scss';
import {useDispatch} from 'react-redux';
import {GlobalList} from '../components/global-list';
import {CountriesTable} from '../components/countires-table';
import {MapWrapper} from '../components/map-wrapper';
import {clearFoundCountries, loadAllStats, setFoundCountries} from '../services/actions';
import {useAppSelector} from '../../../store/hooks';
import {getFoundCountries, getFoundCountriesLength, getGlobalStats} from '../services/selectors';

export const AllStats = () => {
    const dispatch = useDispatch();
    const initialListLength = 5;
    const [listLength, setListLength] = useState(initialListLength);
    const countries = useAppSelector(state => getFoundCountries(state, listLength));
    const allCountriesLength = useAppSelector(getFoundCountriesLength);
    const globalStats = useAppSelector(getGlobalStats);

    const searchHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        setListLength(initialListLength);

        if (value) {
            dispatch(setFoundCountries({value: value}));
        } else {
            dispatch(clearFoundCountries());
        }
    };

    const seeAllHandler = () => {
        setListLength(Infinity);
    };

    useEffect(() => {
        dispatch(loadAllStats());
    }, [dispatch]);

    return (
        <div className='all-stats'>
            <div className='all-stats__tables'>
                <GlobalList stats={globalStats}/>
                <CountriesTable
                    countries={countries}
                    allCountriesLength={allCountriesLength}
                    searchHandler={searchHandler}
                    seeAllHandler={seeAllHandler}
                />
            </div>
            <div className='all-stats__map'>
                <MapWrapper/>
            </div>
        </div>
    );
};

