export type Country = {
    ID: string,
    Country: string,
    CountryCode: string,
    Slug: string,
    NewConfirmed: number,
    TotalConfirmed: number,
    NewDeaths: number,
    TotalDeaths: number,
    NewRecovered: number,
    TotalRecovered: number,
    Date: string,
};

export type Global = {
    NewConfirmed:number,
    TotalConfirmed:number,
    NewDeaths:number,
    TotalDeaths:number,
    NewRecovered:number,
    TotalRecovered:number,
    Date: string
};

export type Summary = {
    ID: string,
    Message: string,
    Global: Global,
    Countries: Country[],
    Data: string
};

export type Day = {
    ID: string,
    Country: string,
    CountryCode: string,
    Province: string,
    City: string,
    CityCode: string,
    Lat: string,
    Lon: string,
    Confirmed: number,
    Deaths: number,
    Recovered: number,
    Active: number,
    Date: string
};

export type StateType = {
    summary?: Summary,
    foundCountries?: Country[],
    countryStats: Day[],
};
