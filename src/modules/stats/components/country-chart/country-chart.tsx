import React from 'react';
import {Chart} from 'react-google-charts';

type Props = {
    stats: ((number | Date)[])[],
};

export const CountryChart = ({stats}: Props) => {
    const titles = ['Day', 'Confirmed', 'Deaths', 'Recovered', 'Active'];
    const data = [titles, ...stats];
    const statsLength = stats.length;
    const firstDay = statsLength && new Date(stats[0][0]).toLocaleDateString();
    const lastDay = statsLength && new Date(stats[statsLength - 1][0]).toLocaleDateString();

    const options = {
        chart: {
            title: `Period - ${statsLength} days(${firstDay} - ${lastDay})`
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

