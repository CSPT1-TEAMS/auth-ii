const express = require('express')
const mongoose = require('mongoose')
const server = express()
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
const routes = require('./_config/routes')
const restrictedRoutes = require('./auth/authRoutes')

const db = require('./_config/db')
const setupMiddleware = require('./_config/middleware')
const setupRoutes = require('./_config/routes')

setupMiddleware(server)
setupRoutes(server)

db.connectTo('authii')
  .then(() => {
    console.log('\n... API Connected to authii Database ...\n')
    server.listen(5500, () =>
      console.log('\n=== API running on port 5500 ===\n')
    )
  })
  .catch(err => {
    console.log('\n*** ERROR Connecting to MongoDB, is it running? ***\n', err)
  })

const { makeToken, verifyToken } = require('./authFunctions')

// ☞ 50e06c46-94fb-440a-afde-abb6a317b074
