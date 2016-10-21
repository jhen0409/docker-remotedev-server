const remotedev = require('remotedev-server');

const getDBOptions = adapter => {
  switch (adapter) {
    case 'firebase':
    case 'http':
      return {
        basePath: process.env.DB_BASE_PATH,
      };
    case 'mongodb':
      return {
        uri: process.env.DB_URI,
        name: process.env.DB_NAME,
        idAttribute: process.env.DB_ID_ATTR,
        table: process.env.DB_TABLE,
      };
    case 'sql':
      return {
        client: process.env.DB_CLIENT,
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
      };
    case 'rethinkdb':
      return {
        host: process.env.DB_HOST,
        db: process.env.DB_NAME,
      }
    default:
      return null;
  }
}

// TODO: Support protocol
remotedev({
  hostname: '0.0.0.0',
  port: process.env.PORT,
  adapter: process.env.ADAPTER,
  dbOptions: getDBOptions(process.env.ADAPTER),
});
