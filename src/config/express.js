import express from 'express'
import bodyParser from 'body-parser'
import apiRoutes from '../routes/apiRoutes'
import authorRoutes from '../routes/authorRoutes'


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

export default app