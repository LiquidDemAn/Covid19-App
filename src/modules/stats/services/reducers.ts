import {StateType} from './typedef';
import {createReducer} from '@reduxjs/toolkit';
import {clearFoundCountries, loadAllStats, loadCountryStats, setFoundCountries} from './actions';

const State: StateType = {
    countryStats: [],
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
        const sortedCountries = filteredCountries?.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);

        if (payload.listLength) {
            state.foundCountries = sortedCountries?.slice(0, payload.listLength);
        } else {
            state.foundCountries = sortedCountries;
        }
    })

    .addCase(clearFoundCountries, (state) => {
        state.foundCountries = [];
    })
);