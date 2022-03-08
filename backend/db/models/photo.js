'use strict';
module.exports = (sequelize, DataTypes) => {
  const Photo = sequelize.define('Photo', {
    title: DataTypes.STRING(50),
    userId: DataTypes.INTEGER,
    albumId: DataTypes.INTEGER,
    imageUrl: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {});
  Photo.associate = function(models) {
    Photo.belongsTo(models.User, { foreignKey: 'userId'});
  };
  return Photo;
};
