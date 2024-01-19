'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('locale_seo_slugs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      localeSeoId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: 'locale_seos',
          key: 'id'
        }
      },
      parentSlugId: {
        type: Sequelize.INTEGER,
        defaultValue: null
      },
      languageAlias: {
        allowNull: false,
        type: Sequelize.STRING
      },
      relParent: {
        type: Sequelize.STRING
      },
      slug: {
        allowNull: false,
        type: Sequelize.STRING
      },
      key: {
        type: Sequelize.STRING
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      redirection: {
        type: Sequelize.BOOLEAN,
        defaultValue: 0
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
    await queryInterface.dropTable('locale_seo_slugs')
  }
}
