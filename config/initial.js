const Configurations = {
   DATABASE: {
      USER: process.env.PULSEJS_DB_USER || '',
      PASSWORD: process.env.PULSEJS_DB_PASSWORD || '',
      DATABASE: process.env.PULSEJS_DB_NAME || '',
      OPTIONS: {
         dialect: 'mysql',
         host: process.env.PULSEJS_DB_HOST || '',
         port: process.env.PULSEJS_DB_PORT || 3306,
         //logging: false,
         dialectOptions: {
            supportBigNumbers: true,
            bigNumberStrings: true
         },
         define: {
            underscored: true,
            freezeTableName: true,
            charset: 'utf8',
            dialectOptions: {
               collate: 'utf8_general_ci'
            },
            timestamps: true
         },
         pool: {
            max: 3,
            idle: 15000,
            acquire: 60000,
         }
      }
   },
   PULSEJS: {
      PORT: process.env.PULSEJS_SERVER_PORT || 9407
   }
};

export default Configurations;