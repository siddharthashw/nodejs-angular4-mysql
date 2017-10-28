import * as Sequelize from 'sequelize';
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
    departmentId: string;
}

export class DepartmentAc {
    id: number;
    name: string;
}

const Department = sequelize.define('department', {
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

export let MigratedDatabase = () => {
    Department.sync();
    User.sync();
}