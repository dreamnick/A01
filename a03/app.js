const path = require("path")
const express = require("express")
const logger = require("morgan")
const bodyParser = require("body-parser")

const app = express()  // make express app
const port = 8081

// ADD THESE COMMENTS AND IMPLEMENTATION HERE
// 1 set up the view engine
// 2 include public assets and use bodyParser
// 3 set up the logger
// 4 handle valid GET requests
// 5 handle valid POST request
// 6 respond with 404 if a bad URI is requested

// Listen for an application request on port 8081
app.listen(port, function () {
  console.log('app listening on http://127.0.0.1:' + port)
})
