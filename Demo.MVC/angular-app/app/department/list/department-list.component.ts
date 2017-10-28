import { Component } from '@angular/core';
import { DepartmentService } from '../department.service';
import { DepartmentAc } from '../department-model';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'department-list.html'
})

export class DepartmentListComponent {
    departmentList: Array<DepartmentAc>;
    constructor(private http: DepartmentService, private router: Router) {
        this.departmentList = new Array<DepartmentAc>();
    }

    ngOnInit() {
        this.getAllDepartment();
    }

    getAllDepartment() {
        this.http.getAllDepartment().subscribe(res => {
            this.departmentList = new Array<DepartmentAc>();
            this.departmentList = res;
        });
    }

    editDepartment(id: number) {
        this.router.navigate(['department/edit/' + id]);
    }

    addDepartment() {
        this.router.navigate(['department/add']);
    }
}