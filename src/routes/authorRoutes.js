import express from 'express'
import UrlBuilder from './components/UrlBuilder'
import Authenticator from './config/auth/Authenticator'

const router = express.Router()
const urlBuilder = new UrlBuilder()
const authenticator = new Authenticator()

router.get(urlBuilder.AUTHOR, authenticator.authenticate,(req, resp) => {
    resp.send(200, "TAMO JUNTO")
})

export default router