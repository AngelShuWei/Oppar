'use strict';

module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define('Album', {
    userId: DataTypes.INTEGER,
    title: DataTypes.STRING(50),
    imageUrl: DataTypes.STRING,
    content: DataTypes.TEXT
  }, {});
  Album.associate = function(models) {
    // associations can be defined here
    Album.belongsTo(models.User, { foreignKey: 'userId' });
    Album.hasMany(models.Photo, { foreignKey: 'albumId' });
  };
  return Album;
};
