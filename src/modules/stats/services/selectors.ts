import {AppState} from '../../../store/hooks';

export const getGlobalStats = (state: AppState) => state.stats.allStats?.Global;
export const getCountriesStats = (state: AppState) => state.stats.allStats?.Countries;
export const getFoundCountries = (state: AppState) => state.stats.foundCountries;
export const getCountry = (state: AppState) => state.stats.country;

export const getCountryStats = (state: AppState) => {
    const country = getCountry(state);
    return state.stats.visitedCountries[country] || [];
};

export const getMinConfirmed = (state: AppState) => {
    const countriesStats = getCountriesStats(state);

    return countriesStats?.reduce((acc, cur) => {
        return acc > cur.TotalConfirmed ? cur.TotalConfirmed : acc;
    }, Infinity) || 0;
};

export const getMaxConfirmed = (state: AppState) => {
    const countriesStats = getCountriesStats(state);

    return countriesStats?.reduce((acc, cur) => {
        return acc < cur.TotalConfirmed ? cur.TotalConfirmed : acc;
    }, 0) || 0;
};

export const getMinDate = (state: AppState) => {
    const countryStats = getCountryStats(state);

    if (countryStats.length) {
        return new Date(countryStats[0].Date);
    } else {
        return new Date();
    }
};

export const getMaxDate = (state: AppState) => {
    const countryStats = getCountryStats(state);

    if (countryStats.length) {
        return new Date(countryStats[countryStats.length - 1].Date);
    } else {
        return new Date();
    }
};

export const getStatsByPeriod = (state: AppState, date: Date, period: number) => {
    const countryStats = getCountryStats(state);
    const day = countryStats.find(item => new Date(item.Date).toDateString() === date.toDateString());
    const dayIndex = countryStats.findIndex(item => item === day);
    const statsByPeriod = countryStats.slice(
        dayIndex - period + 1 > 0 ? dayIndex - period + 1 : 0, dayIndex + 1
    );
    return statsByPeriod.map(item => [new Date(item.Date), item.Confirmed, item.Deaths, item.Recovered, item.Active]);
};
