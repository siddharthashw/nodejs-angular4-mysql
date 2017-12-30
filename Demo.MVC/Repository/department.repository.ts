import { Department } from '../Models/department-model';
import * as Repository from './repository';

export let GetAllDepartment = () => {
    return Repository.GetAll(Department);
}

export let GetDepartmentById = (id: number) => {
    return Repository.GetById(Department, id);
}

export let InsertDepartment = (data: any) => {
    return Repository.InsertData(Department, data);
}

export let UpdateDepartment = (data: any, query: any) => {
    return Repository.UpdateData(Department, data, query);
}