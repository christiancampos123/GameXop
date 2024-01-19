'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('page_trackings', {
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
      ip: {
        type: Sequelize.STRING
      },
      isRobot: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
      },
      startTime: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      endTime: {
        allowNull: false,
        type: Sequelize.DOUBLE
      },
      latencyMS: {
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
    await queryInterface.addIndex('page_trackings', ['customerId'], {
      name: 'page_trackings_customerId_fk'
    })
    await queryInterface.addIndex('page_trackings', ['localeSeoId'], {
      name: 'page_trackings_localeSeoId_fk'
    })
    await queryInterface.addIndex('page_trackings', ['localeSlugSeoId'], {
      name: 'page_trackings_localeSlugSeoId_fk'
    })
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('page_trackings')
  }
}
