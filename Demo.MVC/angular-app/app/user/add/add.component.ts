import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { User } from '../user-model';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'add.html'
})

export class UserAddComponent {
    user: User;
    constructor(private http: UserService, private router: Router) {
        this.user = new User();
    }

    saveChanges() {
        this.http.addUser(this.user).subscribe(res => {
            this.router.navigate(['']);
        });
    }
}