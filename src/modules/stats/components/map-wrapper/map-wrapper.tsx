import React, {ReactElement, useState} from 'react';
import {Map} from '../map';
import ReactTooltip from 'react-tooltip';
import {scaleLinear} from 'd3-scale';
import {useAppSelector} from '../../../../store/hooks';
import {getCountriesStats, getMaxConfirmed, getMinConfirmed} from '../../services/selectors';
import {TooltipContent} from '../tooltip-content';
import {Country} from '../../services/typedef';

export const MapWrapper = () => {
    const [tooltipContent, setTooltipContent] = useState<string | ReactElement>('');
    const countries = useAppSelector(getCountriesStats);
    const minConfirmed = useAppSelector(getMinConfirmed);
    const maxConfirmed = useAppSelector(getMaxConfirmed);
    const colorScale = scaleLinear([minConfirmed, maxConfirmed], ['#ffedea', '#ff5233']);

    const countryEnterHandler = (country: Country) => {
        setTooltipContent(<TooltipContent country={country}/>);
    };

    const countryLeaveHandler = () => {
        setTooltipContent('');
    };

    return (
        <div>
            <Map
                countries={countries}
                colorScale={colorScale}
                onMouseEnter={countryEnterHandler}
                onMouseLeave={countryLeaveHandler}
            />
            <ReactTooltip>
                {tooltipContent}
            </ReactTooltip>
        </div>
    );
};

