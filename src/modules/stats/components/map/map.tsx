import React from 'react';
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography
} from 'react-simple-maps';
import {Link} from 'react-router-dom';
import {Country} from '../../services/typedef';

const geoUrl = 'https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json';

type Props = {
    countries?: Country[],
    colorScale: (value: number) => string,
    onMouseEnter: (country: Country) => void,
    onMouseLeave: () => void
};

export const Map = ({onMouseEnter, onMouseLeave, colorScale, countries}: Props) => {
    return (
        <ComposableMap data-tip="" width={900} height={500} projectionConfig={{scale: 180}}>
            <ZoomableGroup>
                <Geographies geography={geoUrl}>
                    {({geographies}) =>
                        geographies.map(geo => {
                            const country = countries?.find(country => country.CountryCode === geo.properties.ISO_A2);

                            return (
                                country && <Link key={country.ID} to={`/${country.Country}`}>
                                    <Geography
                                        geography={geo}
                                        onMouseEnter={() => onMouseEnter(country)}
                                        onMouseLeave={onMouseLeave}
                                        style={{
                                            default: {
                                                fill: colorScale(country.TotalConfirmed),
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

