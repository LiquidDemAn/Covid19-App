import React from 'react';
import {Chart} from "react-google-charts";

type Props = {
    period: ((number | Date)[])[],
    country: string | undefined
}

export const CountryChart = ({period, country}: Props) => {
    const titles = ['Day', 'Confirmed', 'Deaths', 'Recovered', 'Active'];
    const data = [titles, ...period];
    const firstDay = period.length && new Date(period[0][0]).toLocaleDateString();
    const lastDay = period.length && new Date(period[period.length - 1][0]).toLocaleDateString();

    const options = {
        chart: {
            title: `Period - ${period.length} days(${firstDay} - ${lastDay})`
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

