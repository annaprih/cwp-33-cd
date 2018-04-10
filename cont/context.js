module.exports = (Sequelize, config) => {
    const options = {
      host: config.db.host,
      dialect: config.db.dialect,
      dialectOptions: config.db.dialectOptions
    };
  
    const sequelize = new Sequelize(
      config.db.name,
      config.db.user,
      config.db.password,
      options
    );
  
    const Commits = require("../models/Commit")(Sequelize, sequelize);
    const Repos = require("../models/Repo")(Sequelize, sequelize);
  
    return {
      Commits,
      Repos,
      sequelize,
      Sequelize
    };
  };
  