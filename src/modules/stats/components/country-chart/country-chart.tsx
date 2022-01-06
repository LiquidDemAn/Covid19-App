import React from 'react';
import {Chart} from "react-google-charts";

type Props = {
    period: ((number | Date)[])[]
}

export const CountryChart = ({period}: Props) => {
    const titles = ["Day", "Confirmed", "Deaths", "Recovered"]
    const data = [titles, ...period]

    const options = {
        chart: {
            title: "Stats of Covid-19",
            subtitle: `Days(${period.length})`,
        },
    };

    return (
        <div>
            <Chart
                chartType="Line"
                width="1200px"
                height="400px"
                data={data}
                options={options}
            />
        </div>
    );
};

