import { User } from '../Models/user-model';
import * as Repository from './repository';

export let GetAllUser = () => {
    return Repository.GetAll(User);
}

export let GetUserById = (id: number) => {
    return Repository.GetById(User, id);
}

export let InsertUser = (data: any) => {
    return Repository.InsertData(User, data);
}

export let UpdateUser = (data: any, query: any) => {
    return Repository.UpdateData(User, data, query);
}

export let DeleteUserById = (id: number) => {
    return Repository.DeleteByQuery(User, { id: id });
}