import express from 'express'

const router = express.Router()

router.get('/api/health/', (req, resp) => {
    resp.json({"status":'UP'})
})

export default router