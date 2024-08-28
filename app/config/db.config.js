module.exports = {
  HOST: 'autorack.proxy.rlwy.net',
  USER: 'root',
  PASSWORD: 'NLHBkdpbOPTTQEDtWmPZtqdrsZGRYRnq',
  DB: 'railway',
  PORT: '34347',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
