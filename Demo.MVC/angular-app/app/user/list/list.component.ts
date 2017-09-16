import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user-model';

@Component({
    moduleId: module.id,
    templateUrl: 'list.html'
})

export class UserListComponent implements OnInit {
    userList: Array<User>;
    constructor(private http: UserService) {
        this.userList = new Array<User>();
    }

    ngOnInit() {
        //this.getAllUser();
    }

    getAllUser() {
        this.http.getAllUser().subscribe(res => {
            this.userList = res;
        });
    }
}