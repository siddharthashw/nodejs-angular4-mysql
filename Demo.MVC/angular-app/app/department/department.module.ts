import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { DepartmentComponent } from './department.component';
import { DepartmentAddComponent } from './add/department-add.component';
import { DepartmentEditComponent } from './edit/department-edit.component';
import { DepartmentListComponent } from './list/department-list.component';
import { departmentRoutes } from './department.routes';
import { DepartmentService } from './department.service';

@NgModule({
    imports: [
        SharedModule,
        departmentRoutes
    ],
    declarations: [
        DepartmentComponent,
        DepartmentAddComponent,
        DepartmentEditComponent,
        DepartmentListComponent
    ],
    exports: [],
    providers: [
        DepartmentService
    ]
})
export class DepartmentModule { }