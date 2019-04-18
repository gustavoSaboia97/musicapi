import AuthorRepository from '../repository/AuthorRepository'
import Author from '../models/Author';

export default class AuthorBusiness{

    constructor(){
        this._authorRepository = new AuthorRepository()
    }

    async getAuthors(){
        console.log(`Getting all authors from repository`)
        
        return await this._authorRepository.getAuthors()
    }

    async addAuthor(name){
        console.log(`Adding new author on repository: ${name}`)
        let author = new Author(name, [])
        author = await this._authorRepository.insertAuthor(author)
        return author
    }

    getAuthor(id){}

    editAuthor(id, name){}

    deleteAuthor(id){}
}