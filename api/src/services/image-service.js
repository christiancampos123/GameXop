const fs = require('fs/promises')
const path = require('path')
const sharp = require('sharp')

module.exports = class ImageService {
  uploadImage = async images => {
    console.log('new image')
    const nameFinal = images.file[0].originalname
    const name = nameFinal.replace(/[\s_]/g, '-')
    console.log(name)
  }

  resizeImages = async (images) => {

  }

  deleteImages = async filename => {

  }
}
