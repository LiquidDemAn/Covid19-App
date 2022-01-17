import React from 'react';
import './countries-table.scss';
import {Button, FormControl, InputGroup, Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Country} from '../../services/typedef';

type Props = {
    countries?: Country[],
    allCountriesLength: number,
    searchHandler: (event: React.ChangeEvent<HTMLSelectElement>) => void,
    seeAllHandler: () => void
};

export const CountriesTable = ({countries, allCountriesLength, searchHandler, seeAllHandler}: Props) => {
    if (countries) {
        return (
            <div className='countries-table'>
                <InputGroup onChange={searchHandler}>
                    <FormControl
                        placeholder='Search Country'
                    />
                </InputGroup>

                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>Country</th>
                        <th>Confirmed</th>
                        <th>Death</th>
                        <th>Recovered</th>
                    </tr>
                    </thead>
                    <tbody>
                    {countries.map((country) => (
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
                    ))}
                    </tbody>
                </Table>
                {allCountriesLength > countries.length &&
                    <Button onClick={seeAllHandler}>
                        See all
                    </Button>
                }
            </div>
        );
    } else {
        return <></>
    }
};

