import { DB_NAME, DB_USER, DB_PASSWORD, DB_HOST } from "../environement";

const Sequelize = require('sequelize');

const sequelizeConnection = new Sequelize(
    DB_NAME, 
    DB_USER, 
    DB_PASSWORD, {
    dialect: "mysql",
    host: DB_HOST, 
    logging: false,
    define: {
        freezeTableName: true
    }
}); 

(async () => {
    try {
        await sequelizeConnection.authenticate();
        console.log('Connection to database has been established successfully.');

    } catch(err){
        console.log('connection failed')
    }
})();

module.exports = sequelizeConnection;