const { DataTypes } = require('sequelize');

module.exports = (client) => {
  const Lesson = client.define(
    'Lesson',
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
      },
      date: {
        type: DataTypes.STRING
      },
      label: {
        type: DataTypes.STRING
      },
      student_count: {
        type: DataTypes.INTEGER
      },
    },
    {
      tableName: 'lesson',
      timestamps: false
    }
  );

  return Lesson;
};
