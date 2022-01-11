import React from 'react';
import {Country} from '../../services/typedef';

type Props = {
    country: Country
};

export const TooltipContent = ({country}:Props) => {
    return (
        <div>
            <p>Country: {country.Country}</p>
            <p>New Confirmed: {country.NewConfirmed}</p>
            <p>Total Confirmed: {country.TotalConfirmed}</p>
            <p>New Deaths: {country.NewDeaths}</p>
            <p>Total Deaths: {country.TotalDeaths}</p>
        </div>
    );
};

