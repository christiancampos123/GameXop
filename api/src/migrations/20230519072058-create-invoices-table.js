'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('invoices', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customerId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'customers',
          key: 'id'
        }
      },
      saleId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'sales',
          key: 'id'
        }
      },
      returnId: {
        allowNull: true,
        type: Sequelize.INTEGER,
        references: {
          model: 'returns',
          key: 'id'
        }
      },
      reference: {
        allowNull: false,
        type: Sequelize.STRING
      },
      path: {
        allowNull: false,
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
      .then(() => queryInterface.addIndex('invoices', ['customerId'], {
        name: 'invoice_customerId_fk'
      }))
      .then(() => queryInterface.addIndex('invoices', ['saleId'], {
        name: 'invoice_saleId_fk'
      }))
      .then(() => queryInterface.addIndex('invoices', ['returnId'], {
        name: 'invoice_returnId_fk'
      }))
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('invoices')
  }
}
