import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {Day, AllStats} from './typedef';

export const loadAllStats = createAsyncThunk<AllStats>('stats/load-all-stats', async () => {
    return await fetch('https://api.covid19api.com/summary').then(res => res.json());
});

export const loadCountryStats = createAsyncThunk<Day[], string>('stats/load-country-stats', async (country) => {
    return await fetch(`https://api.covid19api.com/total/country/${country}`).then(res => res.json());
});

export const setFoundCountries = createAction<{ value: string, length: number }>('stats/set-found-countries');
export const clearFoundCountries = createAction('stats/clear-found-countries');