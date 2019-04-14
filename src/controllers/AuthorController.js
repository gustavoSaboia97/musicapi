import AuthorBusiness from '../business/AuthorBusiness'
import JsonClassTransformer from '../util/JsonClassTransformer'

export default class AuthorController{

    constructor(){
        this._business = new AuthorBusiness()
        this._json = new JsonClassTransformer()
    }

    getAuthors(req, resp){
        console.log('Getting the authors')

        let authors = this._business.getAuthors()
        
        resp.status(200).json(this._json.transform(authors))
    }

    addAuthor(req, resp){
        console.log(`Adding an author ${req.body.name}`)

        let name = req.body.name

        let author = this._business.addAuthor(name)

        resp.status(200).json(this._json.transform(author))
    }

    getAuthor(req, resp){
        console.log(`Get an author ID: ${req.params.id}`)

        let id = req.params.id

        let author = this._business.getAuthor(id)
        
        resp.status(200).json(this._json.transform(author))
    }

    editAuthor(req, resp){
        console.log(`Editting an author ID: ${req.params.id}`)

        let name = req.body.name

        let id = req.params.id

        let author = this._business.editAuthor(id, name)

        resp.status(200).json(this._json.transform(author))
    }

    deleteAuthor(req, resp){
        console.log(`Deleting an author ID: ${req.params.id}`)

        let id = req.params.id

        let author = this._business.deleteAuthor(id)
        
        resp.status(200).send()
    }
}