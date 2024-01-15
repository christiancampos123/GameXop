'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {

    let localeSeoBulk = [
      {
        id: 1,
        language: 'es',
        url: '/admin/resources',
        title: 'Generador de recursos administrativos',
        menu: 1,
        sitemap: 0
      },
      {
        id: 2,
        language: 'es',
        url: '/admin/users',
        title: 'Usuarios',
        menu: 1,
        sitemap: 0
      },
      {
        id: 3,
        language: 'es',
        url: '/admin/menus',
        title: 'Menús',
        menu: 1,
        sitemap: 0
      }
    ];

    await queryInterface.bulkInsert('locale_seos', localeSeoBulk.map(item => ({
      ...item,
      createdAt: new Date(),
      updatedAt: new Date()
    })), {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('locale_seos', null, {});
  }
};
