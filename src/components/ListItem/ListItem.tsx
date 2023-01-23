import React from 'react';
import classNames from "classnames";

import classes from './ListItem.module.scss'
import {Badge} from "../Bagde/Badge";
import {ReactComponent as ChevronRight} from '../../assets/images/chevron-right.svg'

interface UserListProps {
    title: string,
    invited: boolean,
}

export const ListItem: React.FC<UserListProps> = ({title, invited}) => {
    return (
        <li className={classNames([classes.listItem, {[classes.invited]: invited}])}>
            <div className={classes.userInfo}>
                <span className={classes.userName}>{title}</span>
            </div>
            {invited &&
                <div className={classes.userActions}>
                    <Badge title={'Invited'}/>
                </div>
            }
            <span className={classes.chevron}>
                <ChevronRight/>
            </span>
        </li>
    )

}