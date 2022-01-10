import React from 'react';
import {ListGroup} from "react-bootstrap";
import {Global} from '../../services/typedef';

type Props = {
    stats?: Global
}

export const StatsTable = ({stats}: Props) => {
    return (
        <ListGroup>
            <ListGroup.Item>New Confirmed: {stats?.NewConfirmed}</ListGroup.Item>
            <ListGroup.Item>Total Confirmed: {stats?.TotalConfirmed}</ListGroup.Item>
            <ListGroup.Item>New Deaths: {stats?.NewDeaths}</ListGroup.Item>
            <ListGroup.Item>Total Deaths: {stats?.TotalDeaths}</ListGroup.Item>
            <ListGroup.Item>New Recovered: {stats?.NewRecovered}</ListGroup.Item>
            <ListGroup.Item>Total Recovered: {stats?.TotalRecovered}</ListGroup.Item>
        </ListGroup>

    );
};

