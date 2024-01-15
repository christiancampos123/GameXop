'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('return_errors', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      paymentMethodId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'payment_methods',
          key: 'id'
        }
      },
      customerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'customers',
          key: 'id'
        }
      },
      returnId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'returns',
          key: 'id'
        }
      },
      errorCode: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      errorMessage: {
        type: Sequelize.STRING
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
      .then(() => queryInterface.addIndex('return_errors', ['paymentMethodId'], {
        name: 'returnError_paymentMethodId_fk'
      }))
      .then(() => queryInterface.addIndex('return_errors', ['customerId'], {
        name: 'returnError_customerId_fk'
      }))
      .then(() => queryInterface.addIndex('return_errors', ['returnId'], {
        name: 'returnError_returnId_fk'
      }))
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('return_errors')
  }
}
