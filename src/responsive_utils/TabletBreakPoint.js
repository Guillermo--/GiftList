import React from 'react';
import BreakPoint from './BreakPoint';

export default function TabletBreakPoint(props) {
    return (
        <BreakPoint name="tablet">
            {props.children}
        </BreakPoint>
    );
}