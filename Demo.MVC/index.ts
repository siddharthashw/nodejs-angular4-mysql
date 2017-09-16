import * as express from 'express';
import * as SqlConnection from './AppData/sql-connection';
var port = 1515;
var app = express();
import * as BodyParser from 'body-parser';
var connection = SqlConnection.Connection();
connection.connect();
import * as UserController from './Controllers/user-controller';
var path = require('path');
app.use(express.static(path.join(__dirname, 'angular-app')));
// set the view engine to ejs
app.set('views', __dirname + '/Views');
app.use(express.static(__dirname + '/angular-app'));
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);
// set body-parser to get json request
app.use(BodyParser.urlencoded({ extended: false }));
app.use(BodyParser.json());
import { User } from './Models/user-model';

app.get('/', function (request, response) {
    response.send("<b>Hello World !!</b>");
});
app.get('/dashboard', function (request, response) {
    response.render('index.html');
});
app.get('/api/user', function (request, response) {
    UserController.GetAllUser(response);
});
app.get('/api/user/:id', function (request, response) {
    let id = +request.params.id;
    UserController.GetUserById(response, id);
});
app.delete('/api/user/:id', function (request, response) {
    let id = +request.params.id;
    UserController.DeletedUserById(response, id);
});
app.post('/api/user', function (request, response) {
    let body = request.body;
    let user: User = JSON.parse(JSON.stringify(body));
    UserController.AddUser(response, user);
});
app.put('/api/user', function (request, response) {
    let body = request.body;
    let user: User = JSON.parse(JSON.stringify(body));
    UserController.EditUser(response, user);
});

app.listen(port);