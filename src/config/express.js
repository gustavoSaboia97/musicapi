import express from 'express'
import bodyParser from 'body-parser'
import apiRoutes from '../routes/apiRoutes'
import authorRoutes from '../routes/authorRoutes'
import ErrorHandler from '../errors/ErrorHandler'

//Express APP
const app = express()

//Body Parser
app.use(bodyParser.urlencoded({
    extended: true
}))
  
app.use(bodyParser.json())

//Routes
app.use(apiRoutes)
app.use(authorRoutes)

//Error Handlers
const errorHandler = new ErrorHandler()
// app.use(errorHandler.apiError)
app.use(errorHandler.genericError)

export default app