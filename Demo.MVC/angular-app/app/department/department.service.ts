import { Http, Headers, RequestOptions, Response, URLSearchParams } from "@angular/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { DepartmentAc } from './department-model';

@Injectable()
export class DepartmentService {
    departmentUrl = "api/department/";
    constructor(private http: Http) {
    }

    getAllDepartment() {
        return this.http.get(this.departmentUrl).map(res => res.json());
    }

    getDepartmentById(id: number) {
        return this.http.get(this.departmentUrl + id).map(res => res.json());
    }

    addDepartment(user: DepartmentAc) {
        let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        return this.http.post(this.departmentUrl, JSON.stringify(user), { headers: headers });
    }

    editDepartment(user: DepartmentAc) {
        let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        return this.http.put(this.departmentUrl, JSON.stringify(user), { headers: headers });
    }
}