import { Http, Headers, RequestOptions, Response, URLSearchParams } from "@angular/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import { User} from './user-model';

@Injectable()
export class UserService {
    userUrl = "api/user/";
    constructor(private http: Http) {
    }

    getAllUser() {
        let headers = new Headers({ 'Access-Control-Allow-Origin': '*' });
        return this.http.get(this.userUrl, { headers: headers }).map(res => res.json());
    }

    getUserById(id: number) {
        return this.http.get(this.userUrl + id).map(res => res.json());
    }

    deleteUserById(id: number) {
        return this.http.delete(this.userUrl + id);
    }

    addUser(user: User) {
        let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        return this.http.post(this.userUrl, JSON.stringify(user), { headers: headers });
    }

    editUser(user: User) {
        let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
        return this.http.put(this.userUrl, JSON.stringify(user), { headers: headers });
    }
}