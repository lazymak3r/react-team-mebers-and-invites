import {Role} from "./TeamMember";
import {getRandomInt, getRandomPhoneNumber} from "../utils";

export interface Invite {
    id: number;
    phone: string;
    role: Role;
}

export class InviteEntity implements Invite {
    constructor(public id: number, public phone: string, public role: Role) {
    }
}

let id = 0;
export const generateNewInvite = (): Invite => {
    id++;
    const roles = ["Administrator", "Standard"];
    return new InviteEntity(id, getRandomPhoneNumber(), roles[getRandomInt(0, roles.length)] as Role,)
}