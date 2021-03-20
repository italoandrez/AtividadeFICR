  
module.exports = {
  dialect: "sqlite",
  storage: `${__dirname}/../database/dbficr.sqlite`,
  database: "ficr-tasks",
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
  },
};
