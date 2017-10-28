import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user-model';
import { Router } from '@angular/router';
import { DepartmentAc } from '../../department/department-model';

@Component({
    moduleId: module.id,
    templateUrl: 'list.html'
})

export class UserListComponent implements OnInit {
    userList: Array<User>;
    departmentList: Array<DepartmentAc>;
    constructor(private http: UserService, private router: Router) {
        this.userList = new Array<User>();
        this.departmentList = new Array<DepartmentAc>();
    }

    ngOnInit() {
        this.getAllUser();
    }

    getAllUser() {
        this.http.getAllUser().subscribe(res => {
            this.userList = new Array<User>();
            this.userList = res;
            for (var index = 0; index < res.length; index++) {
                let user = new User();
                let department = this.departmentList.filter(x => {
                    return x.id === res[index].departmentId;
                });
                user.departmentId = department[0].id;
                user.departmentName = department[0].name;
                user.firstname = res[index].firstname;
                user.lastname = res[index].lastname;
                user.id = res[index].id;
                this.userList.push(user);
            }
        });
    }

    deleteUser(id: number) {
        this.http.deleteUserById(id).subscribe(res => {
            this.getAllUser();
        });
    }

    editUser(id: number) {
        this.router.navigate(['user/edit/'+ id]);
    }

    addUser() {
        this.router.navigate(['user/add']);
    }

    getAllDepartment() {
        this.http.getAllDepartment().subscribe(res => {
            this.departmentList = res;
        });
    }
}