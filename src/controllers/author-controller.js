import AuthorBusiness from '../business/author-business'

export default class AuthorController{

    constructor(){
        this.business = new AuthorBusiness()
    }

    async getAuthors(req, resp){
        console.log('[CONTROLLER] Getting the authors')

        let authors = await this.business.getAuthors()
        
        resp.status(200).json(authors)
    }

    async addAuthor(req, resp){
        console.log(`[CONTROLLER] Adding an author ${req.body.name}`)

        let name = req.body.name

        let author = await this.business.addAuthor(name)

        resp.status(200).json(author)
    }

    getAuthor(req, resp){
        console.log(`[CONTROLLER] Get an author ID: ${req.params.id}`)

        let id = req.params.id

        let author = this.business.getAuthorById(id)
        
        resp.status(200).json(author)
    }

    editAuthor(req, resp){
        console.log(`[CONTROLLER] Editting an author ID: ${req.params.id}`)

        let name = req.body.name

        let id = req.params.id

        let author = this.business.editAuthor(id, name)

        resp.status(200).json(author)
    }

    async deleteAuthor(req, resp){
        console.log(`[CONTROLLER] Deleting an author ID: ${req.params.id}`)

        let id = req.params.id

        await this.business.deleteAuthor(id)
        
        resp.status(200).send()
    }
}