import {Sequelize} from 'sequelize-typescript';
import dotenv from 'dotenv';
import Budget from '../models/Budget';

dotenv.config();
// @ts-ignore
const database = new Sequelize(process.env.DATABASE_URL as string, {
    dialect: 'postgres',
    logging: false,
    dialectOptions: {},
    define: {
        timestamps: true,
        underscored: true,
        schema: process.env.DB_SCHEMA,
    },
    models: [Budget],
});

export const connecDB = async () => {
    try{
        await database.authenticate();
        await database.sync();
        console.log('Database Connected..');
    } catch (error) {
        console.error('No se pudo conectar a la Base de Datos ',error);
    }
}
