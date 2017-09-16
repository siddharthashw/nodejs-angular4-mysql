import * as SqlConnection from '../AppData/sql-connection';
var connection = SqlConnection.Connection();
import { User } from '../Models/user-model';

export let GetAllUser = (res: any) => {
    connection.query('SELECT * FROM nodemvc.user;', function (err, rows, field) {
        res.send(rows);
    });
}

export let GetUserById = (res: any, id: number) => {
    connection.query('SELECT * FROM nodemvc.user WHERE Id = ?;', [id], function (err, rows, field) {
        res.send(rows[0]);
    });
}

export let DeletedUserById = (res: any, id: number) => {
    connection.query('DELETE FROM nodemvc.user WHERE id = ?;', [id], function (err, rows, field) {
        res.send();
    });
}

export let AddUser = (res: any, user: User) => {
    connection.query('INSERT INTO nodemvc.user (firstName, lastName)VALUES(?,?);', [user.firstname, user.lastname], function (err, rows, field) {
        res.send();
    });
}

export let EditUser = (res: any, user: User) => {
    connection.query('UPDATE nodemvc.user SET firstName=?, lastName=? WHERE Id = ?;', [user.firstname, user.lastname, user.id], function (err, rows, field) {
        res.send();
    });
}