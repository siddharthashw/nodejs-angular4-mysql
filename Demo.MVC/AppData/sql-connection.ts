import * as SqlConnection from 'mysql';

export let Connection = () => {
    var connection = SqlConnection.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'P@ssw0rd',
        database: 'nodemvc'
    });
    return connection;
}