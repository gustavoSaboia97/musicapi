import app from './config/express'

const host = process.env.HOST || '0.0.0.0'
const port = process.env.PORT || 3000

app.listen( port, host, () => {
    console.log(`Server running at http://${host}:${port}/`)
})