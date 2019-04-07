import express from 'express'
import apiRoutes from '../routes/apiRoutes'
import authorRoutes from '../routes/authorRoutes'


//Express APP
const app = express()

//Routes
app.use(apiRoutes)
app.use(authorRoutes)

export default app