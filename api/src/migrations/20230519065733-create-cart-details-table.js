'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('cart_details', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      cartId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {
          model: 'carts',
          key: 'id'
        }
      },
      productId: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
        type: Sequelize.DECIMAL(6, 2),
        allowNull: false
      },
      taxPrice: {
        type: Sequelize.DECIMAL(6, 2)
      },
      quantity: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updatedAt: {
        type: Sequelize.DATE,
        allowNull: false
      },
      deletedAt: {
        type: Sequelize.DATE
      }
    })
      .then(() => queryInterface.addIndex('cart_details', ['cartId'], {
        name: 'cartDetail_cartId_fk'
      }))
      .then(() => queryInterface.addIndex('cart_details', ['productId'], {
        name: 'cartDetail_productId_fk'
      }))
      .then(() => queryInterface.addIndex('cart_details', ['localeId'], {
        name: 'cartDetail_localeId_fk'
      }))
      .then(() => queryInterface.addIndex('cart_details', ['priceId'], {
        name: 'cartDetail_priceId_fk'
      }))
      .then(() => queryInterface.addIndex('cart_details', ['taxId'], {
        name: 'cartDetail_taxId_fk'
      }))
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('cart_details')
  }
}
