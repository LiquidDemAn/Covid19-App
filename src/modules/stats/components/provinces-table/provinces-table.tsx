import React from 'react';
import './provinces-table.scss';
import {Table} from 'react-bootstrap';
import {Province} from '../../services/typedef';

type Props = {
    provinces: Province[]
};

export const ProvincesTable = ({provinces}: Props) => {
    return (
        <Table className='provinces-table' striped bordered hover>
            <thead>
            <tr>
                <th>Province</th>
                <th>Confirmed</th>
                <th>Death</th>
                <th>Recovered</th>
                <th>Active</th>
            </tr>
            </thead>
            <tbody>
            {provinces.map((province) => (
                <tr key={province.ID}>
                    <td>{province.Province}</td>
                    <td>{province.Confirmed}</td>
                    <td>{province.Deaths}</td>
                    <td>{province.Recovered}</td>
                    <td>{province.Active}</td>
                </tr>
            ))}
            </tbody>
        </Table>
    );
};

