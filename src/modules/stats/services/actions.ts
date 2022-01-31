import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {Day, AllStats} from './typedef';

export const loadAllStats = createAsyncThunk<AllStats>('stats/load-all-stats', async () => {
    return await fetch('https://api.covid19api.com/summary').then(res => res.json());
});

export const loadCountryStats = createAsyncThunk<{stats: Day[], country: string}, string>('stats/load-country-stats', async (country) => {
    const stats = await fetch(`https://api.covid19api.com/total/country/${country}`).then(res => res.json());
    return {stats, country};
});

export const setFoundCountries = createAction<{ value: string }>('stats/set-found-countries');
export const clearFoundCountries = createAction('stats/clear-found-countries');
export const setCountry = createAction<{ country: string }>('stats/set-country');
