import React from 'react';
import './link-component.scss'
import {Link} from "react-router-dom";

type Props = {
    to: string,
    children: string
}


export const LinkComponent = ({to, children}: Props) => {
    return (
        <Link className='link' to={to}>{children}</Link>
    );
};
