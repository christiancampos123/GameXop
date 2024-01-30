const fs = require('fs')

// Lee el contenido del archivo
const filePath = '../models/cart-detail.js' // Reemplaza con la ruta correcta
const fileContent = fs.readFileSync(filePath, 'utf-8')

// Encuentra las palabras clave usando expresiones regulares
const attributeRegex = /(\w+): {\s*type:\s*DataTypes\.(\w+)/g
const matches = fileContent.match(attributeRegex)

// Almacena los nombres de las propiedades en un array con índice incremental
let attributeNamesArray = []

if (matches) {
  attributeNamesArray = matches.map((match, index) => {
    const [, attributeName] = match.match(/(\w+): {\s*type:\s*DataTypes\.(\w+)/)
    return `${index + 1}. ${attributeName}`
  })
} else {
  console.error('No se encontraron palabras clave en el archivo.')
}

// Imprime el array de nombres de propiedades con índice incremental
console.log('Array de nombres de propiedades del modelo CartDetail:')
console.log(attributeNamesArray)
