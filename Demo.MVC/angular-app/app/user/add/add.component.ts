import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user-model';
import { Router } from '@angular/router';
import { DepartmentAc } from '../../department/department-model';

@Component({
    moduleId: module.id,
    templateUrl: 'add.html'
})

export class UserAddComponent implements OnInit {
    user: User;
    departmentList: Array<DepartmentAc>;
    constructor(private http: UserService, private router: Router) {
        this.user = new User();
        this.departmentList = new Array<DepartmentAc>();
    }

    ngOnInit() {
        this.getAllDepartment();
    }

    saveChanges() {
        this.http.addUser(this.user).subscribe(res => {
            this.router.navigate(['']);
        });
    }

    getAllDepartment() {
        this.http.getAllDepartment().subscribe(res => {
            this.departmentList = res;
        });
    }
}