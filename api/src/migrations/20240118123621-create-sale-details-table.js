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
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'sales',
          key: 'id'
        }
      },
      productId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'products',
          key: 'id'
        }
      },
      localeId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'locales',
          key: 'id'
        }
      },
      priceId: {
        allowNull: false,
        type: Sequelize.INTEGER,
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
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'taxes',
          key: 'id'
        }
      },
      basePrice: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
      },
      taxPrice: {
        allowNull: false,
        type: Sequelize.DECIMAL(10, 2)
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
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('sale_details')
  }
}
