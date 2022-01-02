import {createAsyncThunk} from "@reduxjs/toolkit";
import {Summary} from "./typedef";

export const loadAllStats = createAsyncThunk<Summary>('stats/load-all-stats', async() => {
    return await fetch('https://api.covid19api.com/summary').then(res => res.json())
});