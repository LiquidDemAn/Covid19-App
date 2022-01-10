import React from 'react';
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography
} from 'react-simple-maps';
import {Link} from 'react-router-dom';
import {Country} from '../../modules/stats/services/typedef';

const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

type Props = {
    setTooltipContent: React.Dispatch<string>,
    colorScale?: (value: number) => string,
    countries?: Country[],
    onMouseEnter: (country: Country) => void
};

export const Map = ({setTooltipContent, colorScale, countries, onMouseEnter}: Props) => {
    return (
        <ComposableMap data-tip="" width={900} height={400} projectionConfig={{scale: 150}}>
            <ZoomableGroup>
                <Geographies geography={geoUrl}>
                    {({geographies}) =>
                        geographies.map(geo => {
                            const country = countries?.find(country => country.CountryCode === geo.properties.ISO_A2)

                            return (
                                country && <Link key={country.ID} to={`/country/${country.Country}`}>
                                    <Geography
                                        geography={geo}
                                        onMouseEnter={() => onMouseEnter(country)}
                                        onMouseLeave={() => setTooltipContent('')}
                                        style={{
                                            default: {
                                                fill: colorScale ? colorScale(country.TotalConfirmed) : '#D6D6DA',
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

