import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DepartmentComponent } from './department.component';
import { DepartmentAddComponent } from './add/department-add.component';
import { DepartmentEditComponent } from './edit/department-edit.component';
import { DepartmentListComponent } from './list/department-list.component';

const DepartmentRoutes: Routes = [{
    path: "department",
    component: DepartmentComponent,
    children: [
        { path: '', component: DepartmentListComponent },
        { path: 'add', component: DepartmentAddComponent },
        { path: 'edit/:id', component: DepartmentEditComponent }
    ]
}];
export const departmentRoutes: ModuleWithProviders = RouterModule.forChild(DepartmentRoutes);