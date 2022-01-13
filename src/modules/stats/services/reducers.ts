import {StateType} from './typedef';
import {createReducer} from '@reduxjs/toolkit';
import {clearFoundCountries, loadAllStats, loadCountryStats, setFoundCountries} from './actions';

const State: StateType = {
    foundCountries: [],
    countryStats: []
};

export const stats = createReducer(State, builder => builder
    .addCase(loadAllStats.fulfilled, (state, {payload}) => {
        state.summary = payload;
    })

    .addCase(loadCountryStats.fulfilled, (state, {payload}) => {
        state.countryStats = payload;
    })

    .addCase(setFoundCountries, (state, {payload}) => {
        const countries = state.summary?.Countries;
        const filteredCountries = countries?.filter(country => {
            return country.Country.toLowerCase().indexOf(payload.value.toLowerCase()) === 0;
        });
        state.foundCountries = filteredCountries?.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
    })

    .addCase(clearFoundCountries, (state) => {
        state.foundCountries = [];
    })
);