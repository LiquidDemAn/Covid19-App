import React from 'react';
import './countries-table.scss';
import {FormControl, InputGroup, Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Country} from '../../services/typedef';

type Props = {
    countries?: Country[],
    searchHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void
};

export const CountriesTable = ({countries, searchHandler}: Props) => {
    return (
        <div className='countries-table'>
            <InputGroup onChange={searchHandler}>
                <FormControl
                    placeholder='Search Country'
                />
            </InputGroup>
            <div className='countries-table__table'>
                <Table striped bordered>
                    <thead>
                    <tr>
                        <th>Country</th>
                        <th>Confirmed</th>
                        <th>Death</th>
                        <th>Recovered</th>
                    </tr>
                    </thead>
                    <tbody>
                    {countries?.length ? countries.map((country) => (
                        <tr key={country.ID}>
                            <td>
                                <Link to={`/${country.Country}`}>
                                    {country.Country}
                                </Link>
                            </td>
                            <td>{country.TotalConfirmed}</td>
                            <td>{country.TotalDeaths}</td>
                            <td>{country.TotalRecovered}</td>
                        </tr>
                    )) :
                        <tr className='countries-table__empty'>
                            <td colSpan={4}>
                                List is Empty
                            </td>
                        </tr>
                    }
                    </tbody>
                </Table>
            </div>
        </div>
    );
};

