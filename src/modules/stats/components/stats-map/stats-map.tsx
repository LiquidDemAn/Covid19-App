import React, {ReactElement, useState} from 'react';
import {Map} from '../../../../components/map';
import ReactTooltip from 'react-tooltip';
import {scaleLinear} from 'd3-scale';
import {useAppSelector} from '../../../../store/hooks';
import {getCountries, getMaxConfirmed, getMinConfirmed} from '../../services/selectors';

export const StatsMap = () => {
    const [content, setContent] = useState<string | ReactElement>('');
    const minConfirmed = useAppSelector(getMinConfirmed);
    const maxConfirmed = useAppSelector(getMaxConfirmed);
    const countries = useAppSelector(getCountries);
    const colorScale = scaleLinear([minConfirmed, maxConfirmed], ['#ffedea', '#ff5233']);

    return (
        <div>
            <Map
                setTooltipContent={setContent}
                colorScale={colorScale}
                countries={countries}
            />
            <ReactTooltip>{content}</ReactTooltip>
        </div>
    );
};

