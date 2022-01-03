import React from 'react';
import {ListGroup} from "react-bootstrap";
import {useAppSelector} from "../../../../store/hooks";
import {getGlobal} from "../../services/selectors";

export const GlobalTable = () => {
    const globalStats = useAppSelector(getGlobal);

    return (
        <ListGroup>
            <ListGroup.Item>New Confirmed: {globalStats?.NewConfirmed}</ListGroup.Item>
            <ListGroup.Item>Total Confirmed: {globalStats?.TotalConfirmed}</ListGroup.Item>
            <ListGroup.Item>New Deaths: {globalStats?.NewDeaths}</ListGroup.Item>
            <ListGroup.Item>Total Deaths: {globalStats?.TotalDeaths}</ListGroup.Item>
            <ListGroup.Item>New Recovered: {globalStats?.NewRecovered}</ListGroup.Item>
            <ListGroup.Item>Total Recovered: {globalStats?.TotalRecovered}</ListGroup.Item>
        </ListGroup>

    );
};

