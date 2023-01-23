import {generateNewTeamMember, TeamMember} from './../models/TeamMember';
import {generateNewInvite, Invite} from "../models/Invite";

export const useApi = () => {
    return {
        getUsers(): Promise<TeamMember[]> {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve([
                        generateNewTeamMember(),
                        generateNewTeamMember(),
                        generateNewTeamMember(),
                        generateNewTeamMember(),
                        generateNewTeamMember(),
                        generateNewTeamMember()
                    ])
                }, 2000)
            })
        },
        getInvites(): Promise<Invite[]> {
            return new Promise(resolve => {
                setTimeout(() => {
                    resolve([
                        generateNewInvite(),
                        generateNewInvite(),
                        generateNewInvite(),
                    ])
                }, 2000)
            })
        }
    }
}