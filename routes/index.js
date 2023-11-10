const express = require('express')
const fs = require('fs')
const router = express.Router()
const PATH_ROUTES = __dirname

/**
 * Remueve la extension del nombre del archivo
 */
const removeExt = (fileName) => {
   return fileName.split('.').shift()
}

/**
 * Carga la ruta de forma dinamica en funcion del nombre de los archivos dentro de ./routes
 */
fs.readdirSync(PATH_ROUTES).filter(file => {
   const name = removeExt(file)

   if(name !== 'index'){
      console.log(`Cargando ruta: /${name}`)
      router.use(`/${name}`, require(`./${file}`))
   }
})

module.exports = router