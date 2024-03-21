const fs = require('fs/promises')
const path = require('path')
const sharp = require('sharp')

module.exports = class ImageService {
  uploadImage = async images => {
    // console.log(images.file.length)
    console.log('new image')
    // let fileName = ''
    const result = []
    for (const image of images.file) {
      try {
        const originalName = image.originalname
        const finalName = originalName.replace(/[\s_]/g, '-')
        image.originalname = finalName
        const filename = finalName

        const newFilename = await fs.access(path.join(__dirname, `../storage/images/gallery/original/${path.parse(filename).name}.webp`))
          .then(async () => {
          // TODO: Dar al usuario la opción de sobreescribir la imagen
            return `${path.parse(filename).name}-${new Date().getTime()}.webp`
          })
          .catch(async () => {
            return `${path.parse(filename).name}.webp`
          })

        // const fullPath = path.join(__dirname, '../storage/images/gallery/original/', newFilename)
        // console.log(fullPath)

        // Aquí guardamos la imagen con el nombre generado
        await sharp(image.buffer)
          .webp({ lossless: true })
          .toFile(path.join(__dirname, `../storage/images/gallery/original/${newFilename}`))

        await sharp(image.buffer)
          .resize(135, 135)
          .webp({ quality: 80 })
          .toFile(path.join(__dirname, `../storage/images/gallery/thumbnail/${newFilename}`))
        result.push(newFilename)
      } catch (error) {
        console.log(error)
      }
    }
    return result
  }

  resizeImages = async (images) => {

  }

  deleteImages = async filename => {
    try {
      await fs.unlink(path.join(__dirname, `../storage/images/gallery/original/${filename}`))
      await fs.unlink(path.join(__dirname, `../storage/images/gallery/thumbnail/${filename}`))

      return 1
    } catch {
      return 0
    }
  }
}
