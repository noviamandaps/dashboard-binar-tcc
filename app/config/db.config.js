module.exports = {
  HOST: "34.128.90.124",
  USER: "root",
  PASSWORD: "password",
  DB: "db_cars",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
