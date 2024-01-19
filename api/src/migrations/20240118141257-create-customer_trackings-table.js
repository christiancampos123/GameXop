'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('customer_trackings', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      customerId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'customers',
          key: 'id'
        }
      },
      fingerprint: {
        allowNull: false,
        type: Sequelize.STRING
      },
      localeSeoId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'locale_seos',
          key: 'id'
        }
      },
      localeSlugSeoId: {
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'locale_seo_slugs',
          key: 'id'
        }
      },
      path: {
        allowNull: false,
        type: Sequelize.STRING
      },
      eventTime: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      eventName: {
        allowNull: false,
        type: Sequelize.STRING
      },
      event: {
        allowNull: false,
        type: Sequelize.JSON
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
    await queryInterface.addIndex('customer_trackings', ['customerId'], {
      name: 'customer_trackings_customerId_fk'
    })
    await queryInterface.addIndex('customer_trackings', ['localeSeoId'], {
      name: 'customer_trackings_localeSeoId_fk'
    })
    await queryInterface.addIndex('customer_trackings', ['localeSlugSeoId'], {
      name: 'customer_trackings_localeSlugSeoId_fk'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('customer_trackings')
  }
}
