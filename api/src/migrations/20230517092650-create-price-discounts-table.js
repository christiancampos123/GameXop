'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('price_discounts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      priceId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'prices',
          key: 'id'
        }
      },
      percentage: {
        type: Sequelize.DECIMAL
      },
      multiplier: {
        type: Sequelize.DECIMAL
      },
      current: {
        type: Sequelize.BOOLEAN
      },
      startsAt: {
        type: Sequelize.DATE
      },
      endsAt: {
        type: Sequelize.DATE
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('price_discounts')
  }
}
