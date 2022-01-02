import {StateType} from "./typedef";
import {createReducer} from "@reduxjs/toolkit";
import {loadAllStats} from "./actions";

const State: StateType = {
};

export const stats = createReducer(State, builder => builder
    .addCase(loadAllStats.fulfilled, (state, {payload}) => {
        state.summary = payload;
    })
);