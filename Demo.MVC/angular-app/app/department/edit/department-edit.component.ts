import { Component } from '@angular/core';
import { DepartmentService } from '../department.service';
import { DepartmentAc } from '../department-model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'department-edit.html'
})

export class DepartmentEditComponent {
    departmentId: number;
    department: DepartmentAc;
    constructor(private http: DepartmentService, private router: Router, private activeRoute: ActivatedRoute) {
        this.department = new DepartmentAc();
    }

    ngOnInit() {
        this.departmentId = +this.activeRoute.snapshot.params['id'];
        this.getDepartmentById();
    }

    getDepartmentById() {
        this.http.getDepartmentById(this.departmentId).subscribe(res => {
            this.department = res;
        });
    }

    saveChanges() {
        this.http.editDepartment(this.department).subscribe(res => {
            this.router.navigate(['department']);
        });
    }
}