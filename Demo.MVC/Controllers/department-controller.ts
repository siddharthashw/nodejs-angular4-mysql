import { DepartmentAc } from '../Models/department-model';
import * as DepartmentRepository from '../Repository/department.repository';

export let GetAllDepartment = (res: any) => {
    DepartmentRepository.GetAllDepartment().then(department => {
        let list = new Array<any>();
        for (var i = 0; i < department.length; i++) {
            list.push(department[i].dataValues);
        }
        res.send(list);
    });
}

export let GetDepartmentById = (res: any, id: number) => {
    DepartmentRepository.GetDepartmentById(id).then(department => {
        res.send(department.dataValues);
    });
}

export let AddDepartment = (res: any, department: DepartmentAc) => {
    let data = {
        name: department.name
    }
    DepartmentRepository.InsertDepartment(data).then(dbDepartment => {
        res.send();
    });
}

export let EditDepartment = (res: any, department: DepartmentAc) => {
    let data = {
        name: department.name
    }
    DepartmentRepository.UpdateDepartment(data, { id: department.id }).then(dbDepartment => {
        res.send();
    });
}