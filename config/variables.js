'use strict'

require('dotenv').config()

const config = {
  port: process.env.PORT || 10000,
  urlBase: process.env.BASE_URL
}

module.exports = config