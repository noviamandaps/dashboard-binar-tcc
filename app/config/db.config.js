module.exports = {
  HOST: "35.247.181.16",
  USER: "dev-nopi",
  PASSWORD: "apaja",
  DB: "db-cars",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
};
