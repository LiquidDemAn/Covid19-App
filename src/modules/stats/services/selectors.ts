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
    const sortedCountries = countries?.sort((a, b) => b.TotalConfirmed - a.TotalConfirmed);
    if (length) {
        return sortedCountries?.slice(0, length);
    } else {
        return sortedCountries;
    }
};

export const getPeriod = (state: AppState, date: string | undefined, daysCounter: number) => {
    const countryStats = state.stats.countryStats;
    const selectedDay = countryStats.find(item => new Date(item.Date).toDateString() === date);
    const selectedDayIndex = countryStats.findIndex(item => item === selectedDay);
    const selectedPeriod = countryStats.slice(
        selectedDayIndex - daysCounter + 1 < 0 ? 0 : selectedDayIndex - daysCounter + 1, selectedDayIndex + 1
    );

    return selectedPeriod.map(item => [new Date(item.Date), item.Confirmed, item.Deaths, item.Recovered, item.Active])
};

export const getFirstDate = (state: AppState) => {
    const countryStats = state.stats.countryStats;
    return new Date(countryStats[0]?.Date);
}

export const getLastDate = (state: AppState) => {
    const countryStats = state.stats.countryStats;
    return new Date(countryStats[countryStats.length - 1]?.Date);
}

