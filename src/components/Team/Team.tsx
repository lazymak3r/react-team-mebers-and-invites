import React, {useState, useEffect, useMemo, useCallback} from 'react';

import classes from './Team.module.scss'
import Spinner from "../Spinner/Spinner";
import {useApi} from '../../hooks/useApi';
import {Invite} from "../../models/Invite";
import {UserList} from "../UserList/UserList";
import {Role, TeamMember} from '../../models/TeamMember';
import {ReactComponent as AdminUserIcon} from '../../assets/images/admin.svg'
import {ReactComponent as StandardUserIcon} from '../../assets/images/user.svg'

export const Team: React.FC = () => {
    const {getUsers, getInvites} = useApi();

    const [isLoading, setIsLoading] = useState(false);
    const [users, setUsers] = useState<TeamMember[] | null>(null)
    const [invites, setInvites] = useState<Invite[] | null>(null)

    const getUsersByRole = useCallback((role: Role) => {
        let returnData: (TeamMember | Invite)[] = []
        const returnUsers = users?.filter(u => u.role === role)
        const returnInvites = invites?.filter(u => u.role === role)

        if (returnUsers?.length) returnData = returnData.concat(returnUsers)
        if (returnInvites?.length) returnData = returnData.concat(returnInvites)

        return returnData as (TeamMember | Invite)[];
    }, [users, invites])

    const adminUsers = useMemo(() => getUsersByRole('Administrator'), [getUsersByRole])

    const standardUsers = useMemo(() => getUsersByRole('Standard'), [getUsersByRole])

    const getListHeaderByRole = useCallback((role: Role) => {
        const roleIconMap = {"Administrator": AdminUserIcon, "Standard": StandardUserIcon};
        const Icon = roleIconMap[role];

        return (
            <div className={classes.listHeader}>
                <Icon className={classes.listHeaderIcon}/>
                <span className={classes.listHeaderTitle}>Administrators</span>
            </div>
        )
    }, [])

    useEffect(() => {
        setIsLoading(true)
        Promise.all([getUsers(), getInvites()])
            .then(([users, invites]) => {
                setUsers(users);
                setInvites(invites)
                setIsLoading(false);
            })
            .catch(e => {
                console.log(e)
                setIsLoading(false)
            })
    }, [])

    return (
        <div className={classes.wrapper}>
            <div className={classes.container}>
                {isLoading ?
                    <Spinner label={'Getting fake generated data...'}/>
                    :
                    adminUsers?.length && standardUsers.length ?
                        <div className={classes.users}>
                            <UserList
                                users={adminUsers}
                                listHeader={getListHeaderByRole("Administrator")}
                            />
                            <UserList
                                users={standardUsers}
                                listHeader={getListHeaderByRole("Administrator")}
                            />
                        </div>
                        :
                        <span className={classes.noData}>No Data</span>
                }
            </div>
        </div>
    )
}