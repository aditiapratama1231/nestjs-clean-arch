import { Sequelize } from 'sequelize-typescript';
import { databaseConfig } from './db.config';

export const databaseProviders = [{
    provide: 'SEQUELIZE',
    useFactory: async () => {
        let config;
        switch (process.env.NODE_ENV) {
        case 'development':
           config = databaseConfig.development;
           break;
         case 'staging':
            config = databaseConfig.staging;
            break;
        case 'test':
           config = databaseConfig.test;
           break;
        case 'production':
           config = databaseConfig.production;
           break;
        default:
           config = databaseConfig.development;
        }
        const sequelize = new Sequelize(config);
        sequelize.addModels(['models goes here']);
        await sequelize.sync();
        return sequelize;
    },
}];