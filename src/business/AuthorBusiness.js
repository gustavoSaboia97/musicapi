import AuthorRepository from '../repository/AuthorRepository'
import Author from '../models/Author';
import NotFoundError from '../errors/errorTypes/NotFoundError'

export default class AuthorBusiness{

    constructor(){
        this._authorRepository = new AuthorRepository()
    }

    async getAuthors(){
        console.log(`[BUSINESS] Getting all authors from repository`)
        throw (new NotFoundError("NO"))
        return await this._authorRepository.getAuthors()
    }

    async addAuthor(name){
        console.log(`[BUSINESS] Adding new author on repository: ${name}`)
        let author = new Author(name, [])
        author = await this._authorRepository.insertAuthor(author)
        return author
    }

    async getAuthorById(id){
        console.log(`[BUSINESS] Getting author information on repository: ${id}`)
        let author = await this._authorRepository.getAuthorById(id)
        return author
    }

    async editAuthor(id, name){
        console.log(`[BUSINESS] Edit author information on repository: ${id} | ${name}`)
        
    }

    async deleteAuthor(id){
        console.log(`[BUSINESS] Delete author information on repository: ${id}`)
        let removed = await this._authorRepository.deleteAuthor(id)
        
        console.log(`[BUSINESS] Author ${id} Deleted? ${removed}`)
        if (removed)
            throw new NotFoundError()

        return removed
    }
}