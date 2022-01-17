import {createAction, createAsyncThunk} from '@reduxjs/toolkit';
import {Day, Province, Summary} from './typedef';

export const loadAllStats = createAsyncThunk<Summary>('stats/load-all-stats', async () => {
    return await fetch('https://api.covid19api.com/summary').then(res => res.json());
});

export const loadCountryStats = createAsyncThunk<Day[], string | undefined>('stats/load-country-stats', async (country) => {
    return await fetch(`https://api.covid19api.com/total/country/${country}`).then(res => res.json());
})

export const loadProvincesStats = createAsyncThunk<Province[], string | undefined>('stats/load-provinces-stats', async (country) => {
    return await fetch(`https://api.covid19api.com/live/country/${country}`).then(res => res.json());
})

export const setFoundCountries = createAction<{ value: string }>('stats/set-found-countries');
export const clearFoundCountries = createAction('stats/clear-found-countries');