import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user-model';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'list.html'
})

export class UserListComponent implements OnInit {
    userList: Array<User>;
    constructor(private http: UserService, private router: Router) {
        this.userList = new Array<User>();
    }

    ngOnInit() {
        this.getAllUser();
    }

    getAllUser() {
        this.http.getAllUser().subscribe(res => {
            this.userList = new Array<User>();
            this.userList = res;
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
}