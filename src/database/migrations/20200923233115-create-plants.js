'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('plants', { 
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
       },
       name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      scientific_name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      image: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      genus_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: 'genus', key: 'id' },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      }
     });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('plants');

  }
};
