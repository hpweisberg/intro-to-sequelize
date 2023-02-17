'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Feeding extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Feeding.belongsTo(models.Cat, {
        foreignKey: 'catId'
      })
    }
  }
  Feeding.init({
    name: DataTypes.STRING,
    meal: {
      type: DataTypes.ENUM('Breakfast', 'Lunch', 'Dinner'),
      defaultValue: 'Breakfast'
    },
    catId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      onDelete: 'CASCADE',
      references: {
        model: 'Cats',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Feeding',
  });
  return Feeding;
};