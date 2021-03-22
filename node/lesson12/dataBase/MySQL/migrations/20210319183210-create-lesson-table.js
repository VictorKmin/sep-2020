module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */

    await queryInterface.createTable(
      'lesson2',
      {
        id: {
          type: Sequelize.DataTypes.INTEGER,
          autoIncrement: true,
          allowNull: false,
          primaryKey: true
        },
        date: {
          type: Sequelize.DataTypes.STRING
        },
        label: {
          type: Sequelize.DataTypes.STRING
        },
        student_count: {
          type: Sequelize.DataTypes.INTEGER
        },
      }
    );
  },

  down: async (queryInterface) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */

    await queryInterface.dropTable('lesson2');
  }
};
