import React, {useEffect} from 'react';
import './all-stats.scss'
import {useDispatch} from 'react-redux';
import {GlobalTable} from '../components/global-table';
import {FoundCountries} from '../components/found-countries';
import {SearchInput} from '../components/search-input';
import {MapChart} from '../components/map-chart';
import {loadAllStats} from '../services/actions';

export const AllStats = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(loadAllStats());
    }, []);

    return (
        <div className='all-stats'>
            <div className='all-stats__tables'>
                <GlobalTable/>
                <SearchInput/>
                <FoundCountries/>
            </div>
            <div className='all-stats__map'>
                <MapChart/>
            </div>
        </div>
    );
};

