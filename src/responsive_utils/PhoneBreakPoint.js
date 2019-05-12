import React from 'react';
import BreakPoint from './BreakPoint';

export default function PhoneBreakPoint(props) {
    return (
        <BreakPoint name="phone">
            {props.children}
        </BreakPoint>
    );
}