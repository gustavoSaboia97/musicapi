import express from 'express'
import UrlBuilder from './components/UrlBuilder'
import Authenticator from './config/auth/Authenticator'
import Music from '../models/Music'

const router = express.Router()
const urlBuilder = new UrlBuilder()
const authenticator = new Authenticator()

router.get(urlBuilder.AUTHOR, authenticator.authenticate,(req, resp) => {    
    resp.status(200).json()
})

export default router