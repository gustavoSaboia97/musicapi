import express from 'express'
import UrlBuilder from './components/url-builder'
import Authenticator from './config/auth/authenticator'
import AuthorController from '../controllers/author-controller'

const router = express.Router()
const urlBuilder = new UrlBuilder()
const authenticator = new Authenticator()
const authorController = new AuthorController()

router.get(urlBuilder.AUTHOR, authenticator.authenticate, (req, resp, next) => {
    authorController.getAuthors(req, resp)
                    .catch( error => next(error))
})

router.post(urlBuilder.AUTHOR, authenticator.authenticate, (req, resp) => authorController.addAuthor(req, resp))

router.get(urlBuilder.AUTHOR_ID, authenticator.authenticate, (req, resp) => authorController.getAuthor(req, resp))

router.put(urlBuilder.AUTHOR_ID, authenticator.authenticate, (req, resp) => authorController.editAuthor(req, resp))

router.delete(urlBuilder.AUTHOR_ID, authenticator.authenticate, async (req, resp) => await authorController.deleteAuthor(req, resp))


export default router