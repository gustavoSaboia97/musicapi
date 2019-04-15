import AuthorRepository from '../repository/AuthorRepository'

export default class AuthorBusiness{

    constructor(){
        this._authorRepository = new AuthorRepository()
    }

    async getAuthors(){
        console.log(`Getting all authors from repository`)
        
        return await this._authorRepository.getAuthors()
    }

    addAuthor(name){}

    getAuthor(id){}

    editAuthor(id, name){}

    deleteAuthor(id){}
}