import React, {Dispatch, SetStateAction} from 'react';
import './countries-table.scss'
import {Button, Table} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import {Country} from '../../services/typedef';

type Props = {
    countries?: Country[],
    listLength: number
    setListLength: Dispatch<SetStateAction<number>>,
}

export const CountriesTable = ({countries, listLength, setListLength}: Props) => {
    return (
        <div>
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
                {countries && countries.length ?
                    countries.map((country, index) => (
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
            {countries && listLength <= countries.length &&
                <Button onClick={() => setListLength(Infinity)}>
                    See all
                </Button>
            }
        </div>

    );
};

