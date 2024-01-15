'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('sale_details', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      saleId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'sales',
          key: 'id'
        }
      },
      productId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id'
        }
      },
      localeId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'locales',
          key: 'id'
        }
      },
      priceId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'prices',
          key: 'id'
        }
      },
      priceDiscountId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'price_discounts',
          key: 'id'
        }
      },
      taxId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'taxes',
          key: 'id'
        }
      },
      basePrice: {
        allowNull: false,
        type: Sequelize.DECIMAL(6, 2)
      },
      taxPrice: {
        allowNull: false,
        type: Sequelize.DECIMAL(6, 2)
      },
      quantity: {
        allowNull: false,
        type: Sequelize.INTEGER
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
      .then(() => queryInterface.addIndex('sale_details', ['saleId'], {
        name: 'saleDetail_saleId_fk'
      }))
      .then(() => queryInterface.addIndex('sale_details', ['productId'], {
        name: 'saleDetail_productId_fk'
      }))
      .then(() => queryInterface.addIndex('sale_details', ['localeId'], {
        name: 'saleDetail_localeId_fk'
      }))
      .then(() => queryInterface.addIndex('sale_details', ['priceId'], {
        name: 'saleDetail_priceId_fk'
      }))
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sale_details')
  }
}
