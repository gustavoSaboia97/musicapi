import express from 'express';
import UrlBuilder from './components/url-builder';
import Authenticator from './config/auth/authenticator';
import AuthorController from '../controllers/author-controller';

const router = express.Router();
const urlBuilder = new UrlBuilder();
const authenticator = new Authenticator();
const authorController = new AuthorController();

router.get(urlBuilder.AUTHOR, authenticator.authenticate, (req, resp, next) => {
    authorController.getAuthors(req, resp)
                    .catch( error => next(error));
})

router.post(urlBuilder.AUTHOR, authenticator.authenticate, (req, resp, next) => {
    authorController.addAuthor(req, resp)
                    .catch( error => next(error));
})

router.get(urlBuilder.AUTHOR_ID, authenticator.authenticate, (req, resp, next) => {
    authorController.getAuthor(req, resp)
                    .catch(error => next(error));
})

router.put(urlBuilder.AUTHOR_ID, authenticator.authenticate, (req, resp, next) => {
    authorController.editAuthor(req, resp)
                    .catch( error => next(error));
})

router.delete(urlBuilder.AUTHOR_ID, authenticator.authenticate, (req, resp, next) => {
    authorController.deleteAuthor(req, resp)
                    .catch( error => next(error));
})


export default router;