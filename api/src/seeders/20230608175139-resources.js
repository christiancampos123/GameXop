'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('resources', [
      {
        id: 1,
        type: 'admin',
        url: '/admin/resources',
        name: 'Recursos',
        tableName: 'resources',
        tableDefinition: 'La tabla tendrá los campos: id, type, url, name, tableName, tableDefinition. Indice en la url y en el nombre de la tabla',
        modelDefinition: 'Tendrá una relación hasMany con AdminResource (alias adminResources)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 2,
        type: 'admin',
        url: '/admin/admin-resources',
        name: 'Recursos de Administración',
        tableName: 'admin_resources',
        tableDefinition: 'La tabla tendrá los campos: id, resourceId, element, structure. Indice en la clave foranea resourceId',
        modelDefinition: 'Tendrá una relación belongsTo con Resource (alias resource)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 3,
        type: 'admin',
        url: '/admin/menus',
        name: 'Menús',
        tableName: 'menus',
        tableDefinition: 'La tabla tendrá los campos: id, name (notNull).',
        modelDefinition: 'Tendrá una relación hasMany con MenuItem (alias menuItems)',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 4,
        type: 'admin',
        url: '/admin/menu-items',
        name: 'Elementos de Menú',
        tableName: 'menu_items',
        tableDefinition: 'La tabla tendrá los campos: id, menuId (notNull), localeSeoId, localeSeoSlugId, parentId, name (notNull), description,. Indice en la clave foranea menuId, en la clave foranea localeSeoId y en la clave foranea localeSeoSlugId.',
        modelDefinition: 'Tendrá una relación belongsTo con Menu (alias menu), con LocaleSeo (alias localeSeo) y con LocaleSeoSlug (alias localeSeoSlug).',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: 5,
        type: 'admin',
        url: '/admin/locale-seos',
        name: 'Enlaces Estáticos',
        tableName: 'locale_seos',
        tableDefinition: 'La tabla tendrá los campos: id, language (notnull), url (notnull), title (notnull), description, keywords, redirection (boolean), menu (boolean), changeFrequency, priority(decimal), sitemap(boolean). Sin indices. Si estás escribiendo el código del modelo añade la relación de hasMany con LocaleSeoSlug, LocaleSeoRedirect y MenuItem.',
        modelDefinition: 'Tendrá una relación hasMany con LocaleSeoSlug (alias localeSeoSlugs), LocaleSeoRedirect (alias localeSeoRedirects) y MenuItem (alias menuItems).',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('resources', null, {});
  }
};
