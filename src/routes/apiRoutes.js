import express from 'express'
import UrlBuilder from './components/UrlBuilder'

const router = express.Router()
const urlBuilder = new UrlBuilder()

router.get(urlBuilder.HEALTH, (req, resp) => {
    resp.json({"status":'UP'})
})

export default router