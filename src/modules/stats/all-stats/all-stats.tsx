import React, {useEffect} from 'react';
import './all-stats.scss';
import {useDispatch} from 'react-redux';
import {GlobalList} from '../components/global-list';
import {CountriesTable} from '../components/countires-table';
import {MapWrapper} from '../components/map-wrapper';
import {clearFoundCountries, loadAllStats, setFoundCountries} from '../services/actions';
import {useAppSelector} from '../../../store/hooks';
import {getFoundCountries, getGlobalStats} from '../services/selectors';

export const AllStats = () => {
    const dispatch = useDispatch();
    const countries = useAppSelector(getFoundCountries);
    const globalStats = useAppSelector(getGlobalStats);

    const searchHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;

        if (value) {
            dispatch(setFoundCountries({value: value, listLength: 5}));
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
                <GlobalList stats={globalStats}/>
                <CountriesTable
                    countries={countries}
                    searchHandler={searchHandler}
                />
            </div>
            <div className='all-stats__map'>
                <MapWrapper/>
            </div>
        </div>
    );
};

