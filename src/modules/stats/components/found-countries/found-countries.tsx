import React from 'react';
import './found-countries.scss'
import {Table} from 'react-bootstrap';
import {useAppSelector} from '../../../../store/hooks';
import {getFoundCountries} from '../../services/selectors';
import {Link} from 'react-router-dom';

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
                        <td>
                            <Link to={`/country/${country.Country}`}>
                                {country.Country}
                            </Link>
                        </td>
                        <td>{country.TotalConfirmed}</td>
                        <td>{country.TotalDeaths}</td>
                        <td>{country.TotalRecovered}</td>
                    </tr>
                )) :
                <tr>
                    <td colSpan={5} className='found-countries__empty'>
                        List is Empty
                    </td>
                </tr>}
            </tbody>
        </Table>
    );
};

