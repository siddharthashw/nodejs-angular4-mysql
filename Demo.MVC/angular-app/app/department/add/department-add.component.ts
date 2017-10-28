import { Component } from '@angular/core';
import { DepartmentService } from '../department.service';
import { DepartmentAc } from '../department-model';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'department-add.html'
})

export class DepartmentAddComponent {
    department: DepartmentAc;
    constructor(private http: DepartmentService, private router: Router) {
        this.department = new DepartmentAc();
    }

    saveChanges() {
        this.http.addDepartment(this.department).subscribe(res => {
            this.router.navigate(['department']);
        });
    }
}