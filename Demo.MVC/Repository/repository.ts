import { User } from '../Models/user-model';
import { Department } from '../Models/department-model';

export let MigratedDatabase = () => {
    Department.sync();
    User.sync();
}

export let GetAll = (model: any) => {
    return model.findAll();
}

export let GetById = (model: any, id: number) => {
    return model.find({
        where: {
            id: id
        }
    });
}

export let InsertData = (model: any, data: any) => {
    return model.create(data);
}

export let UpdateData = (model: any, data: any, query: any) => {
    return model.update(data, {
        where: query
    });
}

export let DeleteByQuery = (model: any, query: any) => {
    return model.destroy({
        where: query
    });
}