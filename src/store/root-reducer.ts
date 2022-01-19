import {combineReducers} from '@reduxjs/toolkit';
import {stats} from '../modules/stats/services/reducers';

export const rootReducer = combineReducers({
    stats
});
