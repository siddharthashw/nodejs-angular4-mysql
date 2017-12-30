import { UserAc } from '../Models/user-model';
import * as UserRepository from '../Repository/user.repository';

export let GetAllUser = (res: any) => {
    UserRepository.GetAllUser().then(user => {
        let list = new Array<any>();
        for (var i = 0; i < user.length; i++) {
            list.push(user[i].dataValues);
        }
        res.send(list);
    });
}

export let GetUserById = (res: any, id: number) => {
    UserRepository.GetUserById(id).then(user => {
        res.send(user.dataValues);
    });
}

export let DeletedUserById = (res: any, id: number) => {
    UserRepository.DeleteUserById(id).then(user => {
        res.send();
    });
}

export let AddUser = (res: any, user: UserAc) => {
    let data = {
        firstname: user.firstname,
        lastname: user.lastname,
        departmentId: user.departmentId
    }
    UserRepository.InsertUser(data).then(dbUser => {
        res.send();
    });
}

export let EditUser = (res: any, user: UserAc) => {
    let data = {
        firstname: user.firstname,
        lastname: user.lastname,
        departmentId: user.departmentId
    }
    UserRepository.UpdateUser(data, { id: user.id }).then(dbUser => {
        res.send();
    });
}