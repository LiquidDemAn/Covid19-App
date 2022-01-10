import React, {useState} from 'react';
import {Map} from '../../../../components/map';
import ReactTooltip from 'react-tooltip';
import {scaleLinear} from 'd3-scale';
import {useAppSelector} from '../../../../store/hooks';
import {getCountries, getMaxConfirmed, getMinConfirmed} from '../../services/selectors';
import {Country} from '../../services/typedef';

export const StatsMap = () => {
    const [content, setContent] = useState('');
    const minConfirmed = useAppSelector(getMinConfirmed);
    const maxConfirmed = useAppSelector(getMaxConfirmed);
    const countries = useAppSelector(getCountries);
    const colorScale = scaleLinear([minConfirmed, maxConfirmed], ['#ffedea', '#ff5233']);

    const onMouseEnter = (country: Country) => {
        setContent(
            `${country.Country} :
                      New Confirmed: ${country.NewConfirmed} |
                      Total Confirmed: ${country.TotalConfirmed} |
                      New Deaths: ${country.NewDeaths} |
                      Total Deaths: ${country.TotalDeaths} |`
        )
    }

    return (
        <div>
            <Map
                setTooltipContent={setContent}
                colorScale={colorScale}
                countries={countries}
                onMouseEnter={onMouseEnter}
            />
            <ReactTooltip>{content}</ReactTooltip>
        </div>
    );
};

