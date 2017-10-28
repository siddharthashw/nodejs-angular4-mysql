import * as SqlConnection from '../AppData/sql-connection';
var connection = SqlConnection.Connection();
import { UserAc } from '../Models/user-model';

export let GetAllUser = (res: any) => {
    connection.query('SELECT * FROM nodemvc.users;', function (err, rows, field) {
        res.send(rows);
    });
}

export let GetUserById = (res: any, id: number) => {
    connection.query('SELECT * FROM nodemvc.users WHERE Id = ?;', [id], function (err, rows, field) {
        res.send(rows[0]);
    });
}

export let DeletedUserById = (res: any, id: number) => {
    connection.query('DELETE FROM nodemvc.users WHERE id = ?;', [id], function (err, rows, field) {
        res.send();
    });
}

export let AddUser = (res: any, user: UserAc) => {
    let date = new Date();
    let dbDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    connection.query('INSERT INTO nodemvc.users (firstName, lastName, createdAt, updatedAt, departmentId)VALUES(?,?,?,?,?);',
        [user.firstname, user.lastname, dbDate, dbDate, user.departmentId], function (err, rows, field) {
        res.send();
    });
}

export let EditUser = (res: any, user: UserAc) => {
    let date = new Date();
    let dbDate = date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();
    connection.query('UPDATE nodemvc.users SET firstName=?, lastName=?, departmentId=?, updatedAt=? WHERE Id = ?;',
        [user.firstname, user.lastname, user.departmentId, dbDate, user.id], function (err, rows, field) {
        res.send();
    });
}