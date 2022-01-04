import React from 'react';
import {scaleLinear} from 'd3-scale';
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography
} from 'react-simple-maps';
import {useAppSelector} from '../../../../../store/hooks';
import {getCountries, getMaxConfirmed, getMinConfirmed} from '../../../services/selectors';
import {Link} from 'react-router-dom';

const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

type Props = {
    setTooltipContent: React.Dispatch<string>
};

export const Map = ({setTooltipContent}: Props) => {
    const minConfirmed = useAppSelector(getMinConfirmed);
    const maxConfirmed = useAppSelector(getMaxConfirmed);
    const countries = useAppSelector(getCountries);
    const colorScale = scaleLinear([minConfirmed, maxConfirmed], ['#ffedea', '#ff5233']);

    return (
        <ComposableMap data-tip="" width={900} height={400} projectionConfig={{scale: 150}}>
            <ZoomableGroup>
                <Geographies geography={geoUrl}>
                    {({geographies}) =>
                        geographies.map(geo => {
                            const country = countries?.find(country => country.CountryCode === geo.properties.ISO_A2)

                            return (
                                <Link key={country?.ID || geo.rsmKey} to={`/${country?.Country}`}>
                                    <Geography
                                        geography={geo}
                                        onMouseEnter={() => {
                                            setTooltipContent(
                                                `${country?.Country} :
                                                   New Confirmed: ${country?.NewConfirmed} |
                                                   Total Confirmed: ${country?.TotalConfirmed} |
                                                   New Deaths: ${country?.NewDeaths} |
                                                   Total Deaths: ${country?.TotalDeaths} |`
                                            )
                                        }}
                                        onMouseLeave={() => {
                                            setTooltipContent('');
                                        }}
                                        style={{
                                            default: {
                                                fill: country ? colorScale(country.TotalConfirmed) : '#000',
                                                outline: 'none'
                                            },
                                            hover: {
                                                fill: 'orange',
                                                outline: 'none'
                                            },
                                            pressed: {
                                                fill: '#E42',
                                                outline: 'none'
                                            }
                                        }}
                                    />)
                                </Link>
                            )
                        })
                    }
                </Geographies>
            </ZoomableGroup>
        </ComposableMap>
    );
};

