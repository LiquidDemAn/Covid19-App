import React from 'react';
import './periods-buttons.scss'
import {Button} from 'react-bootstrap';

type Props = {
    allowedPeriods: number[],
    setPeriod: (period: number) => void
}

export const PeriodsButtons = ({allowedPeriods, setPeriod} : Props) => {
    return (
        <div className='periods-buttons'>
            <h3 className='periods-buttons__title'>Periods:</h3>
            <div className='periods-buttons__buttons'>
                {allowedPeriods.map(period => (
                    <Button onClick={() => setPeriod(period)} key={period}>{period}</Button>
                ))}
            </div>
        </div>
    );
};

