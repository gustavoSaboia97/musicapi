import express from 'express'
import UrlBuilder from './components/UrlBuilder'
import Authenticator from './config/auth/Authenticator'
import AuthorController from '../controllers/AuthorController'

const router = express.Router()
const urlBuilder = new UrlBuilder()
const authenticator = new Authenticator()
const authorController = new AuthorController()

router.get(urlBuilder.AUTHOR, authenticator.authenticate, (req, resp) => authorController.getAuthors(req, resp))

router.post(urlBuilder.AUTHOR, authenticator.authenticate, (req, resp) => authorController.addAuthor(req, resp))

router.get(urlBuilder.AUTHOR_ID, authenticator.authenticate, (req, resp) => authorController.getAuthor(req, resp))

router.put(urlBuilder.AUTHOR_ID, authenticator.authenticate, (req, resp) => authorController.editAuthor(req, resp))

router.delete(urlBuilder.AUTHOR_ID, authenticator.authenticate, async (req, resp) => await authorController.deleteAuthor(req, resp))


export default router