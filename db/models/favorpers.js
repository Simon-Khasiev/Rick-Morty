const {
  Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class FavorPers extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ User }) {
      this.belongsTo(User, { foreignKey: 'userId' });
    }
  }
  FavorPers.init({
    persId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'FavorPers',
  });
  return FavorPers;
};
