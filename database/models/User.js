const User = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    firstName: DataTypes.STRING,
    lestName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    cpf: DataTypes.STRING,
    phone: DataTypes.STRING,
    role: DataTypes.STRING,
  });

  User.associate = (models) => {
    User.hasOne(models.Addresses,
      { foreignKey: { name: 'userId' }, as: 'addresses' });

    User.hasMany(models.DailyControl,
      { foreignKey: { name: 'userId' }, as: 'dailyControl' });
  };

  return User;
};

module.exports = User;
