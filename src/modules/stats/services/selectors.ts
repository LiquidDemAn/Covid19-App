import {AppState} from "../../../store/hooks";

export const getSummary = (state: AppState) => state.stats.summary;
export const getGlobal = (state: AppState) => state.stats.summary?.Global;
export const getCountries = (state: AppState) => state.stats.summary?.Countries;
export const getMin = (state: AppState) => {
    const summary = getSummary(state);

    return summary?.Countries.reduce((acc, cur) => {
        return acc > cur.TotalConfirmed ? cur.TotalConfirmed : acc
    }, Infinity) || 0;
};
export const getMax = (state: AppState) => {
    const summary = getSummary(state);
    return summary?.Countries.reduce((acc, cur) => {
        return acc < cur.TotalConfirmed ? cur.TotalConfirmed : acc
    }, 0) || Infinity;
};

export const getCountriesList = (state: AppState) => {
    const maxLength = 5;
    const countries = state.stats.countriesList;
    const sortedCountries = countries?.sort((a,b) => {
        return a.TotalConfirmed - b.TotalConfirmed
    })

    return sortedCountries && sortedCountries.slice(0, maxLength)
}