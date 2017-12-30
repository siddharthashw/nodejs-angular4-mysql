import * as sql from '../AppData/sql-connection';
import * as Sequelize from 'sequelize';
import { Department } from './department-model';

export class UserAc {
    id: number;
    firstname: string;
    lastname: string;
    departmentId: string;
}

export const User = sql.sequelize.define('user', {
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
    },
    departmentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
            // This is a reference to another model
            model: Department,
            // This is the column name of the referenced model
            key: 'id'
        }
    }
});