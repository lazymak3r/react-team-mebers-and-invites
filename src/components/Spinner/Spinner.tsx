import React from 'react';

import classes from './Spinner.module.scss'

interface SpinnerProps {
    label?: string
}

const Spinner: React.FC<SpinnerProps> = ({label}) => {
    return (<div className={classes.container}>
            {label && <span className={classes.label}>{label}</span>}
            <div className={classes.spinner}>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default Spinner