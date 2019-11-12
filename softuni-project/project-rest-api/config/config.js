const env = process.env.NODE_ENV || 'development';

const config = {
  development: {
    port: process.env.PORT || 8080,
    dbPath: 'mongodb://localhost:27017/project-rest-api-test',
    jwtSecret: 'my big jwt secret',
    authCookieName: 'auth_token'
  },
  production: {}
};

module.exports = config[env];