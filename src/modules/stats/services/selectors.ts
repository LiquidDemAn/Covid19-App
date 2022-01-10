import {AppState} from '../../../store/hooks';

export const getGlobal = (state: AppState) => state.stats.summary?.Global;
export const getCountries = (state: AppState) => state.stats.summary?.Countries;
export const getFoundCountries = (state: AppState) => state.stats.foundCountries;

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
export const getPeriod = (state: AppState, date: string, daysNumber: number) => {
    const countryStats = state.stats.countryStats;
    const day = countryStats.find(item => new Date(item.Date).toDateString() === date);
    const dayIndex = countryStats.findIndex(item => item === day);
    const period = countryStats.slice(
        dayIndex - daysNumber + 1 > 0 ? dayIndex - daysNumber + 1 : 0 , dayIndex + 1
    );

    return period.map(item => [new Date(item.Date), item.Confirmed, item.Deaths, item.Recovered, item.Active]);
};

export const getMinDate = (state: AppState) => {
    const countryStats = state.stats.countryStats;
    return new Date(countryStats[0]?.Date);
}

export const getMaxDate = (state: AppState) => {
    const countryStats = state.stats.countryStats;
    return new Date(countryStats[countryStats.length - 1]?.Date);
}

