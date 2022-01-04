import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";

export const CountryPage = () => {
    const {country} = useParams();

    useEffect(() => {
        console.log(`render ${country}`)
    }, [])
    return (
        <div>
            <h1>{country}</h1>
        </div>
    );
};

