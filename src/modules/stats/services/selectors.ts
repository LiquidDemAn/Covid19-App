import {AppState} from '../../../store/hooks';

export const getGlobal = (state: AppState) => state.stats.summary?.Global;
export const getCountries = (state: AppState) => state.stats.summary?.Countries;

export const getMinConfirmed = (state: AppState) => {
    const countries = getCountries(state);
    return countries?.reduce((acc, cur) => {
        return acc > cur.TotalConfirmed ? cur.TotalConfirmed : acc;
    }, Infinity) || 0;
};
export const getMaxConfirmed = (state: AppState) => {
    const countries = getCountries(state);
    return countries?.reduce((acc, cur) => {
        return acc < cur.TotalConfirmed ? cur.TotalConfirmed : acc;
    }, 0) || 0;
};

export const getFoundCountries = (state: AppState, length?: number) => {
    const countries = state.stats.foundCountries?.concat();
    const sortedCountries = countries?.sort((a,b) => b.TotalConfirmed - a.TotalConfirmed);
    if (length) {
        return sortedCountries?.slice(0, length);
    } else {
        return sortedCountries;
    }
};