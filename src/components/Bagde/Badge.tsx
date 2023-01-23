import React from 'react';
import classNames from "classnames";

import classes from './Badge.module.scss'

interface BadgeProps {
    title: string,
    variant?: 'primary'
}

export const Badge: React.FC<BadgeProps> = ({title, variant = 'primary'}) => {
    return (
        <span className={classNames(classes.container, classes[variant])}>
            <span className={classes.title}>{title}</span>
        </span>
    )
}