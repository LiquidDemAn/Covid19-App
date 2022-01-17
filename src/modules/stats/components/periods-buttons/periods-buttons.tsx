import React from 'react';
import './periods-buttons.scss';
import {Button} from 'react-bootstrap';

type Props = {
    allowedPeriods: number[],
    selectPeriod: (period: number) => void,
};

export const PeriodsButtons = ({allowedPeriods, selectPeriod} : Props) => {
    return (
        <div className='periods-buttons'>
            <h3 className='periods-buttons__title'>Periods:</h3>
            <div className='periods-buttons__buttons'>
                {allowedPeriods.map(period => (
                    <Button key={period} onClick={() => selectPeriod(period)}>
                        {period}
                    </Button>
                ))}
            </div>
        </div>
    );
};

