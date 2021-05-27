'use strict'
const express = require('express')
const router = express.Router()
const axios = require('axios').default;
const { urlBase } = require("../config/variables")

router.get('/taxpayer', async (req, res) => {
  const { search, cursor, limit } = req.query

  let response
  try {
    response = await axios.get(`${urlBase}/portfolio/taxpayer`, {
      headers: {
        'Content-Type': 'application/json'
      },
      params: {
        "search": search,
        "cursor": cursor,
        "limit": parseInt(limit)
      }
    })
    response = response.data || { indebtedness: [] }
  } catch (error) {
    console.log("error")
  }
  
  res.json(response)

})

router.get('/taxpayer/:portfolioId', async (req, res) => {
  const { search, cursor, limit, bill, paying, from, to, tax } = req.query
  let response
  try {
    response = await axios.get(`${urlBase}/portfolio/taxpayer/${req.params.portfolioId}`, {
      headers: {
        'Content-Type': 'application/json'
      },
      data: JSON.stringify({
        "search": search,
        "cursor": cursor,
        "limit": parseInt(limit),
        "bill": bill === "true" ? true : false,
        "paying": paying === "true" ? true : false,
        "from": from,
        "to": to,
        "tax": tax ? tax : []
      })
    })
    response = response.data || { indebtedness: [] }
  } catch (error) {
    console.log("error")
  }
  
  res.json(response)

})

router.get('/taxpayer/:portfolioId/download', async (req, res) => {
  const { portfolioId } = req.params

  let response
  try {
    response = await axios.get(`${urlBase}/portfolio/taxpayer/${req.params.portfolioId}/download`, {
      headers: {
        'Content-Type': 'application/json'
      },
    })
    // response = response.data
    // console.log(response)
  } catch (error) {
    console.log("error")
  }
  res.json({
    portfolio_file: "VGlwbyxObyxOSUMsRmVjaGEgZGUgVmVuY2ltaWVudG8sVmFsb3IgTGlxdWlkYWRvLFZhbG9yIENhcnRlcmEsUGVyaW9kbyxUaXBvIGRlIEltcHVlc3RvCjIzNDU4OSxGYWN0dXJhLDQ4NTg4MywyMDE5LTA1LTAyIDAwOjAwOjAwICswMDAwICswMDAwLDEwMDAwMDAwLDUwMDAwMDAsU2VwdGllbWJyZSAyMDE5LEltcHVlc3RvIFByZWRpYWwKMjg0NzQzLExpcXVpZGFjacOzbiw2MzUzNjMsMjAxOS0wNC0yMSAwMDowMDowMCArMDAwMCArMDAwMCw1NDAwMDAwMCwzNzAwMDAwMCxTZXB0aWVtYnJlIDIwMTksVGFzYSBhIGxhIFNlZ3VyaWRhZAozMjM0MjEsRmFjdHVyYSw0ODU4ODMsMjAxOS0wNS0wMiAwMDowMDowMCArMDAwMCArMDAwMCwxMDAwMDAwMCw1MDAwMDAwLEFnb3N0byAyMDE5LEltcHVlc3RvIFByZWRpYWwKMTk0Nzg1LExpcXVpZGFjacOzbiw4MzczNzQsMjAxOS0wNi0xMSAwMDowMDowMCArMDAwMCArMDAwMCwxMjQwMDAwMDAsNjkwMDAwMDAsTm92aWVtYnJlIDIwMTksSW1wdWVzdG8gUHJlZGlhbAoxMDQ4MjAsTGlxdWlkYWNpw7NuLDU2NzM3MywyMDE5LTA1LTAyIDAwOjAwOjAwICswMDAwICswMDAwLDIzMDAwMDAwLDMwMDAwMDAsTWF5byAyMDE5LEFsdW1icmFkbyBQw7pibGljbwo="
  })

})

module.exports = router