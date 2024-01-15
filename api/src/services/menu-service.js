const db = require('../models')
const Menu = db.Menu
const MenuItem = db.MenuItem
const LocaleSeo = db.LocaleSeo

module.exports = class MenuService {

  async addToAdminMenu(name, url) {

    const menu = await Menu.findOne({
      where: {
        name: 'admin-header'
      }
    })

    const newLocaleSeo = await LocaleSeo.create({
      language: 'es',
      url: url,
      title: name,
      sitemap: false
    })

    const newMenuItem = await MenuItem.create({
      menuId: menu.id,
      localeSeoId: newLocaleSeo.id,
      name: name,
      private: false
    })

    return newMenuItem
  }
}