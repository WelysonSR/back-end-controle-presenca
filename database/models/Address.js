const Address = (sequelize, DataTypes) => {
  const Address = sequelize.define('Addresses', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    logradouro: DataTypes.STRING,
    complemento: DataTypes.STRING,
    bairro: DataTypes.STRING,
    localidade: DataTypes.STRING,
    cep: DataTypes.STRING,
    uf: DataTypes.STRING,
    idUser: { type: DataTypes.INTEGER, foreignKey: true },
  }, {
    tableName: 'Addresses',
  });

  Address.associate = (models) => {
    Address.belongsTo(models.User,
      { foreignKey: 'idUser', as: 'users' });
  };

  return Address;
};

module.exports = Address;