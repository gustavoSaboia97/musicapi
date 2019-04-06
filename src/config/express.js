import express from 'express'
import router from '../routes/api-routes'

//Express APP
const app = express()

app.use(router)

export default app