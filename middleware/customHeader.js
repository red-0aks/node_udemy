const customHeader = (req, res, next) => {
   try {
      const apiKey = req.headers.api_key
      if(apiKey === 'francis'){
         next()
      }else {
         res.status(403)
         res.send({ error: 'api_key no es correcta' })
      }
   } catch (err) {
      res.status(403)
      res.send({error: 'Algo ocurrio en custom header'})
   }
}

module.exports = customHeader