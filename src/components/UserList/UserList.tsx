import React from 'react';

import classes from './UserList.module.scss'
import {Invite} from "../../models/Invite";
import {ListItem} from "../ListItem/ListItem";
import {TeamMember} from '../../models/TeamMember';

interface UserListProps {
    listHeader: React.ReactNode
    users: (TeamMember | Invite)[]
}

export const UserList: React.FC<UserListProps> = ({users, listHeader}) => {
    return (
        <div className={classes.container}>
            <div className={classes.category}>{listHeader}</div>
            <ul className={classes.list}>
                {
                    users.map(user => {
                        const isTeamMember = "user" in user;
                        const key = `${isTeamMember ? 'team-member' : 'invite'}-${user.id}`;
                        const title = isTeamMember ? user.user.name : user.phone

                        return (
                            <ListItem key={key} title={title} invited={!('user' in user)}/>
                        )
                    })
                }
            </ul>
        </div>
    )
}