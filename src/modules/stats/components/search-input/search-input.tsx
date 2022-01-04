import React from 'react';
import {FormControl, InputGroup} from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import {clearFoundCountries, setFoundCountries} from '../../services/actions';

export const SearchInput = () => {
    const dispatch = useDispatch();
    const onChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const value = event.target.value;
        if (value) {
            dispatch(setFoundCountries({value: value}));
        } else {
            dispatch(clearFoundCountries());
        }
    };

    return (
        <InputGroup onChange={onChange}>
            <FormControl
                placeholder='Search Country'
                aria-label='Search Country'
            />
        </InputGroup>
    );
};

