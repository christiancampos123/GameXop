const fs = require('fs/promises')
const path = require('path')
const sharp = require('sharp')

module.exports = class ImageService {
  uploadImage = async images => {
    console.log('new image')
    console.log(images)
  }

  resizeImages = async (images) => {

  }

  deleteImages = async filename => {

  }
}
