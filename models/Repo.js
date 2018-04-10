module.exports = (Sequelize, sequelize) => {
  return sequelize.define('repo', {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      name: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      }
  });
};