const { matchedData } = require('express-validator')
const {tracksModel} = require('../models')
const handleHttpError = require('../utils/handleError')

/**
 * Obtener lista de la base de datos
 * @param {*} req 
 * @param {*} res 
 */
const getItems = async (req, res) => {
   try {
      const data = await tracksModel.find({})
      res.send({ data })
   
   } catch (error) {
      handleHttpError(res, 'ERROR_GET_ITEMS')  
   }
}

/**
 * Obtener un registro
 * @param {*} req 
 * @param {*} res 
 */
const getItem = async (req, res) => {
   try {
      req = matchedData(req)
      const {id} = req;
      const data = await tracksModel.findById(id)
      res.send({ data })
   } catch (err) {
      handleHttpError(res, 'ERROR_GET_ITEM')
   }
}

/**
 * Inserta un registro
 * @param {*} req 
 * @param {*} res 
 */
const createItem = async (req, res) => {
   try {
      const body = matchedData(req)
      const data = await tracksModel.create(body)
      res.send({ data })

   } catch (error) {
      handleHttpError(res, 'ERROR_CREATE_ITEM', error.message)  
   }
}

/**
 * Actualiza un registro
 * @param {*} req 
 * @param {*} res 
 */
const updateItem = async (req, res) => {
   try {
      // Crea un objeto para id y el resto de propiedades las coloca en la constante body
      const { id, ...body } = matchedData(req)
      const data = await tracksModel.findByIdAndUpdate(
         id, 
         body, 
         { new: true }
      )
      res.send({ data })

   } catch (error) {
      handleHttpError(res, 'ERROR_UPDATE_ITEM', error.message)
   }
}

/**
 * Elimina un registro
 * @param {*} req 
 * @param {*} res 
 */
const deleteItem = async (req, res) => {
   try {
      req = matchedData(req)
      const { id } = req;
      const data = await tracksModel.deleteOne({
         _id: id
      })
      res.send({ data })
   } catch (err) {
      handleHttpError(res, 'ERROR_DELETE_ITEM')
   }
}

module.exports = { getItems, getItem, createItem, updateItem, deleteItem}