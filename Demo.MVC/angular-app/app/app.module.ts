import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule, XHRBackend, Http } from "@angular/http";
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { routing } from './app.routes';
import { DepartmentModule } from './department/department.module';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        BrowserAnimationsModule,
        UserModule,
        routing,
        DepartmentModule
    ],
    bootstrap: [AppComponent],
    providers: [{ provide: LocationStrategy, useClass: HashLocationStrategy }],
})
export class AppModule { }