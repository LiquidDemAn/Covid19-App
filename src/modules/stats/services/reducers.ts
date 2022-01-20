import {StateType} from './typedef';
import {createReducer} from '@reduxjs/toolkit';
import {
    loadAllStats,
    loadCountryStats,
    setFoundCountries,
    clearFoundCountries, setCountry
} from './actions';

const State: StateType = {
    foundCountries: [],
    country: '',
    visitedCountries: {}
};

export const stats = createReducer(State, builder => builder
    .addCase(loadAllStats.fulfilled, (state, {payload}) => {
        state.allStats = payload;
    })

    .addCase(loadCountryStats.fulfilled, (state, {payload}) => {
        state.visitedCountries[payload.country] = payload.stats;
    })

    .addCase(setFoundCountries, (state, {payload}) => {
        const countries = state.allStats?.Countries;
        const filteredCountries = countries?.filter(country => {
            return country.Country.toLowerCase().indexOf(payload.value.toLowerCase()) === 0;
        });
        const sortedCountries = filteredCountries?.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
        state.foundCountries = sortedCountries?.slice(0, payload.length);
    })

    .addCase(clearFoundCountries, (state) => {
        state.foundCountries = [];
    })

    .addCase(setCountry, (state, {payload}) => {
        state.country = payload.country;
    })
);