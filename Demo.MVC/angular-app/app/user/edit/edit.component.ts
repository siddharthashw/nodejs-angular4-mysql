import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user-model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'edit.html'
})

export class UserEditComponent implements OnInit {
    userId: number;
    user: User;
    constructor(private http: UserService, private router: Router, private activeRoute: ActivatedRoute) {
        this.user = new User();
    }

    ngOnInit() {
        this.userId = +this.activeRoute.snapshot.params['id'];
        this.getUserById();
    }

    getUserById() {
        this.http.getUserById(this.userId).subscribe(res => {
            this.user = res;
        });
    }

    saveChanges() {
        this.http.editUser(this.user).subscribe(res => {
            this.router.navigate(['']);
        });
    }
}