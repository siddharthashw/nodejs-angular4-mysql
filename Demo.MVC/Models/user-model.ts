﻿import * as Sequelize from 'sequelize';
const sequelize = new Sequelize('nodemvc', 'root', 'P@ssw0rd', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});

export class UserAc {
    id: number;
    firstname: string;
    lastname: string;
}

const User = sequelize.define('user', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstname: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lastname: {
        type: Sequelize.STRING,
        allowNull: false,
    }
});

export let MigratedDatabase = () => {
    User.sync();
}