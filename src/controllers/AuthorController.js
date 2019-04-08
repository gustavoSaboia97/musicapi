export default class AuthorController{

    constructor(){}

    async getAuthors(req, resp){
        console.log('Getting the authors')
    }

    async addAuthor(req, resp){
        console.log('Adding an author')
    }

    async getAuthor(req, resp){
        console.log(`Get an author ID: ${req.params.id}`)
    }

    async editAuthor(req, resp){
        console.log(`Editting an author ID: ${req.params.id}`)
    }

    async deleteAuthor(req, resp){
        console.log(`Deleting an author ID: ${req.params.id}`)
    }
}