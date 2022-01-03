export type Premium = {};

export type Country = {
    ID: string;
    Country: string;
    CountryCode: string;
    Slug: string;
    NewConfirmed: number;
    TotalConfirmed: number;
    NewDeaths: number;
    TotalDeaths: number;
    NewRecovered: number;
    TotalRecovered: number;
    Date: string;
    Premium: Premium;
};

export type Global = {
    NewConfirmed:number,
    TotalConfirmed:number,
    NewDeaths:number,
    TotalDeaths:number,
    NewRecovered:number,
    TotalRecovered:number,
    Date: string,
}

export type Summary = {
    ID: string,
    Message: string,
    Global: Global,
    Countries: Country[],
    Data: string
}

export type StateType = {
    summary?: Summary,
    countriesList?: Country[]
}
