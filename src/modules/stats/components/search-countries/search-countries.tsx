import React, {memo} from 'react';
import {FormControl, InputGroup} from 'react-bootstrap';

type Props = {
    onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export const SearchCountries = ({onChange}: Props) => {
    return (
        <InputGroup onChange={onChange}>
            <FormControl
                placeholder='Search Country'
                aria-label='Search Country'
            />
        </InputGroup>
    );
};

