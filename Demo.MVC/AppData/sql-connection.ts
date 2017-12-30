import * as Sequelize from 'sequelize';
export const sequelize = new Sequelize('nodemvc', 'root', 'P@ssw0rd', {
    host: 'localhost',
    port: 3306,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 10000
    },
});