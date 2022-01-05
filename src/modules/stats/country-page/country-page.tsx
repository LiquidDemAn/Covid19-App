import React, {useEffect, useState} from 'react';
import 'react-calendar/dist/Calendar.css';
import {useParams} from 'react-router-dom';
import Calendar from 'react-calendar';

export const CountryPage = () => {
    const {country} = useParams();
    const [value, onChange] = useState(new Date());

    useEffect(() => {
        console.log(value.toDateString() === new Date('2022-01-05T00:00:00Z').toDateString());
    }, [value])
    return (
        <div>
            <h1>{country}</h1>
            <Calendar
                onChange={onChange}
                value={value}
            />
        </div>
    );
};

