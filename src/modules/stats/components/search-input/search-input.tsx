import React from 'react';
import {FormControl, InputGroup} from "react-bootstrap";

export const SearchInput = () => {
    return (
        <InputGroup>
            <FormControl
                placeholder="Search Country"
                aria-label="Search Country"
            />
        </InputGroup>
    );
};

