const mongoose = require('mongoose')
const dbConnect = async () => {
   const DB_URI = process.env.DB_URI
   try {
      await mongoose.connect(DB_URI, {
         useNewUrlParser: true,
         useUnifiedTopology: true,
         socketTimeoutMS: 30000,
      })
      console.log('Conexion CORRECTA')
   } catch (err) {
      console.error('Error en la conexion: ', err)
   }
}

module.exports = dbConnect