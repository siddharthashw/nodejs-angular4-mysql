import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { UserComponent } from './user.component';
import { UserListComponent } from './list/list.component';
import { UserAddComponent } from './add/add.component';
import { UserEditComponent } from './edit/edit.component';

const UserRoutes: Routes = [{
    path: "user",
    component: UserComponent,
    children: [
        { path: '', component: UserListComponent },
        { path: 'add', component: UserAddComponent },
        { path: 'edit/:id', component: UserEditComponent }
    ]
}];
export const userRoutes: ModuleWithProviders = RouterModule.forChild(UserRoutes);