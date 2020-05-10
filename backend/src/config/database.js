module.exports = {
  dialect: 'postgres',
  host: 'db',
  username: 'postgres',
  password: 'postgres',
  database: 'fastfeet',
  port: 5432,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
