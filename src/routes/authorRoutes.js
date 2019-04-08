import express from 'express'
import UrlBuilder from './components/UrlBuilder'
import Authenticator from './config/auth/Authenticator'
import AuthorController from '../controllers/AuthorController'

const router = express.Router()
const urlBuilder = new UrlBuilder()
const authenticator = new Authenticator()
const authorController = new AuthorController()

router.get(urlBuilder.AUTHOR, authenticator.authenticate, authorController.getAuthors)

router.post(urlBuilder.AUTHOR, authenticator.authenticate, authorController.addAuthor)

router.get(urlBuilder.AUTHOR_ID, authenticator.authenticate, authorController.getAuthor)

router.put(urlBuilder.AUTHOR_ID, authenticator.authenticate, authorController.getAuthor)

router.delete(urlBuilder.AUTHOR_ID, authenticator.authenticate, authorController.getAuthor)


export default router