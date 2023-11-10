const handleHttpError = (res, message = 'Algo sucedio', detail = '', code = 403) => {
   res.status(code)
   res.send({ error: message, detail: detail})
}

module.exports = handleHttpError