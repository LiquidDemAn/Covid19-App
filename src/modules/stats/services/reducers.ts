import {StateType} from "./typedef";
import {createReducer} from "@reduxjs/toolkit";
import {loadAllStats, setCountriesList} from "./actions";

const State: StateType = {
};

export const stats = createReducer(State, builder => builder
    .addCase(loadAllStats.fulfilled, (state, {payload}) => {
        state.summary = payload;
    })
    .addCase(setCountriesList, (state, {payload}) => {
        state.countriesList = state.summary?.Countries.filter(country => country.Country.indexOf(payload.country) === 0);
    })
);