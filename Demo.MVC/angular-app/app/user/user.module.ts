import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { UserComponent } from './user.component';
import { UserListComponent } from './list/list.component';
import { userRoutes } from './user.routes';
import { UserService } from './user.service';
import { UserAddComponent } from './add/add.component';
import { UserEditComponent } from './edit/edit.component';

@NgModule({
    imports: [
        SharedModule,
        userRoutes
    ],
    declarations: [
        UserComponent,
        UserListComponent,
        UserAddComponent,
        UserEditComponent
    ],
    exports: [],
    providers: [
        UserService
    ]
})
export class UserModule { }