'use strict'
const express = require('express')
const router = express.Router()
const axios = require('axios').default
const { urlBase } = require("../config/variables")

router.get('/dashboard/:dashboardName', async (req, res) => {
  const { dashboardName } = req.params

  try {
    const response = await axios.get(`${urlBase}/reports/dashboard/Demo`)
    console.log(response)
  } catch (error) {
    console.error(error)
  }
  
  res.send('manuel')

})

module.exports = router