import * as sql from '../AppData/sql-connection';
import * as Sequelize from 'sequelize';

export class DepartmentAc {
    id: number;
    name: string;
}

export const Department = sql.sequelize.define('department', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});