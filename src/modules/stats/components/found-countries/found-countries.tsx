import React from 'react';
import {Table} from 'react-bootstrap';
import {useAppSelector} from '../../../../store/hooks';
import {getFoundCountries} from '../../services/selectors';

export const FoundCountries = () => {
    const foundCountries = useAppSelector(state => getFoundCountries(state, 5));

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
            {foundCountries && foundCountries.length ?
                foundCountries.map((country, index) => (
                <tr key={country.ID}>
                    <td>{index + 1}</td>
                    <td>{country.Country}</td>
                    <td>{country.TotalConfirmed}</td>
                    <td>{country.TotalDeaths}</td>
                    <td>{country.TotalRecovered}</td>
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

