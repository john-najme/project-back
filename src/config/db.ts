import {Sequelize} from 'sequelize';
import dotenv from 'dotenv';

dotenv.config();

const database = new Sequelize(process.env.DATABASE_URL as string, {
    dialect: 'postgres',
    logging: false,
    dialectOptions: {}
});

export const connecDB = async () => {
    try{
        await database.authenticate();
        await database.sync();
        console.log('Database Connected');
    } catch (e) {
        console.error('No se pudo conectar a la Base de Dato',e);
    }
}
