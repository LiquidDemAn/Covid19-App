import React from 'react';
import './tooltip-content.scss';
import {Country} from '../../services/typedef';

type Props = {
    country: Country
};

export const TooltipContent = ({country}:Props) => {
    return (
        <div className='tooltip-content'>
            <p className='tooltip-content__country'>
                {country.Country}
            </p>
            <p className='tooltip-content__item'>
                New Confirmed: {country.NewConfirmed}
            </p>
            <p className='tooltip-content__item'>
                Total Confirmed: {country.TotalConfirmed}
            </p>
            <p className='tooltip-content__item'>
                New Deaths: {country.NewDeaths}
            </p>
            <p className='tooltip-content__item'>
                Total Deaths: {country.TotalDeaths}
            </p>
        </div>
    );
};

