import React from 'react';
import {Table} from "react-bootstrap";

const data = [
    {
        country: 'Ukraine',
        confirmed: 123,
        death: 345,
        recovered: 678
    },
    {
        country: 'Ukraine',
        confirmed: 123,
        death: 345,
        recovered: 678
    },
    {
        country: 'Ukraine',
        confirmed: 123,
        death: 345,
        recovered: 678
    },
    {
        country: 'Ukraine',
        confirmed: 123,
        death: 345,
        recovered: 678
    },
    {
        country: 'Ukraine',
        confirmed: 123,
        death: 345,
        recovered: 678
    },
];

export const FoundCountries = () => {
    return (
        <Table striped bordered hover>
            <thead>
            <tr>
                <th>#</th>
                <th>Country</th>
                <th>Confirmed</th>
                <th>Death</th>
                <th>Recovered</th>
            </tr>
            </thead>
            <tbody>
            {data.length ?
                data.map((country, index) => (
                <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{country.country}</td>
                    <td>{country.confirmed}</td>
                    <td>{country.death}</td>
                    <td>{country.recovered}</td>
                </tr>
                )) :
                <tr>
                    <td colSpan={5} className='text-center'>
                        List is Empty
                    </td>
                </tr>}
            </tbody>
        </Table>
    );
};

