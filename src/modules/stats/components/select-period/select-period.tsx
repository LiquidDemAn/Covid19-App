import React from 'react';
import {FormControl, InputGroup} from 'react-bootstrap';

type Props = {
    period: number,
    selectPeriodHandler: (period: number) => void
};

export const SelectPeriod = ({period, selectPeriodHandler}: Props) => {
    return (
        <div>
            <h2>Period:</h2>
            <InputGroup>
                <FormControl
                    type='number'
                    defaultValue={period}
                    onChange={event => selectPeriodHandler(Number(event.target.value))}
                />
            </InputGroup>
        </div>
    );
};

