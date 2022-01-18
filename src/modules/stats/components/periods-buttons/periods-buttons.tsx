import React from 'react';
import './periods-buttons.scss';
import {Button} from 'react-bootstrap';

type Props = {
    periods: number[],
    selectPeriodHandler: (period: number) => void,
};

export const PeriodsButtons = ({periods, selectPeriodHandler} : Props) => {
    return (
        <div className='periods-buttons'>
            <h3 className='periods-buttons__title'>Periods:</h3>
            <div className='periods-buttons__buttons'>
                {periods.map(period => (
                    <Button key={period} onClick={() => selectPeriodHandler(period)}>
                        {period}
                    </Button>
                ))}
            </div>
        </div>
    );
};

