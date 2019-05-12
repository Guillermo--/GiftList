import React from 'react';
import BreakPoint from './BreakPoint';

export default function DesktopBreakpoint(props) {
    return (
        <BreakPoint name="desktop">
            {props.children}
        </BreakPoint>
    );
}