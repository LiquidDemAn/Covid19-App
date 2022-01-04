import {StateType} from './typedef';
import {createReducer} from '@reduxjs/toolkit';
import {clearFoundCountries, loadAllStats, setFoundCountries} from './actions';

const State: StateType = {};

export const stats = createReducer(State, builder => builder
    .addCase(loadAllStats.fulfilled, (state, {payload}) => {
        state.summary = payload;
    })

    .addCase(setFoundCountries, (state, {payload}) => {
        state.foundCountries = state.summary?.Countries.filter(country => {
            return country.Country.toLowerCase().indexOf(payload.value.toLowerCase()) === 0;
        });
    })

    .addCase(clearFoundCountries, (state) => {
        state.foundCountries = [];
    })
);