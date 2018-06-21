const express = require('express')
const morgan = require('morgan')
const helmet = require('helmet')
const cors = require('cors')
const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)

module.exports = function (server) {
  server.use(helmet())
  server.use(morgan('dev'))
  server.use(express.json())
  server.use(cors())
  server.use(jwt)
  server.use(mongoose)
  server.use(MongoStore)
}
