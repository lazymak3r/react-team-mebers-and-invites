import {getRandomInt, getRandomUserName} from "../utils";

export type Role = "Administrator" | "Standard";

export type Status = "request" | "pending" | "approved" | "declined" | "invited";

export interface UserShortData {
    id: number;
    name: string;
    lastName: string;
    phone: string;
    email: string;
}

export interface TeamMember {
    id: number;
    status: Status;
    user: UserShortData;
    role: Role;
}

export class TeamMemberEntity implements TeamMember {
    constructor(public id: number, public status: Status, public user: UserShortData, public role: Role) {
    }
}

let id = 0;
export const generateNewTeamMember = (): TeamMember => {
    id++;
    const roles = ["Administrator", "Standard"];
    const statuses = ["request", "pending", "approved", "declined"];

    const name = getRandomUserName();
    return new TeamMemberEntity(id, statuses[getRandomInt(0, statuses.length)] as Status, {
        id: id,
        name: name,
        lastName: getRandomUserName(),
        phone: '+374121212',
        email: `${name}@gmail.com`,
    }, roles[getRandomInt(0, roles.length)] as Role)
}