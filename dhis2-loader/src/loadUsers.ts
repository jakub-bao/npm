import {createUpdateUser, Operation} from "../lib/services/createUser.service";
import {User} from "../lib/types/user.type";
import {info} from "../lib/services/print";

export function loadUsers(users:User[],baseUrl:string,authorization:string){
    info(`Inserting ${users.length} users. baseUrl: ${baseUrl} authorization: ${authorization}\n`)
    users.forEach((user)=>createUpdateUser(Operation.create, baseUrl,authorization,user))
}