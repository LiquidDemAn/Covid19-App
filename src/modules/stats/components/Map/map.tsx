import React, {memo} from "react";
import {scaleLinear} from "d3-scale";
import {
    ZoomableGroup,
    ComposableMap,
    Geographies,
    Geography
} from "react-simple-maps";
import {useAppSelector} from "../../../../store/hooks";
import {getCountries, getMax, getMin} from "../../services/selectors";

const geoUrl = "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const rounded = (num: number) => {
    if (num > 1000000000) {
        return Math.round(num / 100000000) / 10 + "Bn";
    } else if (num > 1000000) {
        return Math.round(num / 100000) / 10 + "M";
    } else {
        return Math.round(num / 100) / 10 + "K";
    }
};

type Props = {
    setTooltipContent: React.Dispatch<string>
}

export const Map = ({setTooltipContent}: Props) => {
    const min = useAppSelector(getMin);
    const max = useAppSelector(getMax);
    const countries = useAppSelector(getCountries);

    const colorScale = scaleLinear([min, max], ["brown", "steelblue"]);

    return (
        <>
            <ComposableMap data-tip="" width={900} height={400} projectionConfig={{scale: 150}}>
                <ZoomableGroup>
                    <Geographies geography={geoUrl}>
                        {({geographies}) =>
                            geographies.map(geo => {
                                const country = countries?.find(item => item.CountryCode === geo.properties.ISO_2)

                                return (<Geography
                                    key={geo.rsmKey}
                                    geography={geo}
                                    onMouseEnter={() => {
                                        const name = country?.Country;
                                        const newConfirmed = country?.NewConfirmed;
                                        const totalConfirmed = country?.TotalConfirmed;
                                        const newDeaths = country?.NewDeaths;
                                        const totalDeaths = country?.TotalDeaths;
                                        const {NAME, POP_EST} = geo.properties;

                                        setTooltipContent(`
                                            ${name} :
                                            New Confirmed: ${newConfirmed} |
                                            Total Confirmed: ${totalConfirmed} |
                                            New Deaths: ${newDeaths} |
                                            Total Deaths: ${totalDeaths} |
                                            `);

                                    }}
                                    onMouseLeave={() => {
                                        setTooltipContent("");
                                    }}
                                    style={{
                                        default: {
                                            fill: country ? colorScale(country.TotalConfirmed) : '#000',
                                            outline: "none"
                                        },
                                        hover: {
                                            fill: "#F53",
                                            outline: "none"
                                        },
                                        pressed: {
                                            fill: "#E42",
                                            outline: "none"
                                        }
                                    }}
                                />)
                            })
                        }
                    </Geographies>
                </ZoomableGroup>
            </ComposableMap>
        </>
    );
};

