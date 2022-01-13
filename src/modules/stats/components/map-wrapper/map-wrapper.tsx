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
    const minConfirmed = useAppSelector(getMinConfirmed);
    const maxConfirmed = useAppSelector(getMaxConfirmed);
    const countries = useAppSelector(getCountriesStats);
    const colorScale = scaleLinear([minConfirmed, maxConfirmed], ['#ffedea', '#ff5233']);

    const onCountryEnter = (country: Country) => {
        setTooltipContent(<TooltipContent country={country}/>);
    };

    const onCountryLeave = () => {
        setTooltipContent('');
    };

    return (
        <div>
            <Map
                onMouseEnter={onCountryEnter}
                onMouseLeave={onCountryLeave}
                colorScale={colorScale}
                countries={countries}
            />
            <ReactTooltip>
                {tooltipContent}
            </ReactTooltip>
        </div>
    );
};

