import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DepartmentComponent } from './department/department.component';

const appRoutes: Routes =
    [
        { path: '', redirectTo: 'user', pathMatch: 'full' },
        { path: 'user', component: UserComponent },
        { path: 'department', component: DepartmentComponent }
    ];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);