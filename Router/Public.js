const Router = require('express').Router()

// contoller function 
const { Contact } = require('../Controllers/Public')

Router.route('/contact').get(Contact)


module.exports = Router