const DailyControl = (sequelize, DataTypes) => {
  const DailyControl = sequelize.define('DailyControl', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    dia: DataTypes.STRING,
    data: DataTypes.STRING,
    horaEntrada: DataTypes.STRING,
    horaSaida: DataTypes.STRING,
    transporte: DataTypes.FLOAT,
    bancoHora: DataTypes.STRING,
    userId: { type: DataTypes.INTEGER, foreignKey: true },
  },{
    tableName: 'MonthlyControl',
  });

  DailyControl.associate = (models) => {
    DailyControl.belongsTo(models.User,
      { foreignKey: { name: 'userId' }, as: 'users' });
  };

  return DailyControl;
};

module.exports = DailyControl;