'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const api = require('./routes')
const cors = require ('cors')
const morgan = require('morgan')

app.use(cors({origin: '*'}))
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin","http://localhost:8100");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method == 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    }
    next()
})

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

app.use(morgan('combined'))

app.use('/api/v1', api)



module.exports = app