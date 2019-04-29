import AuthorRepository from '../repository/author-repository'
import Author from '../models/author'
import NotFoundError from '../errors/errorTypes/not-found-error'
import AuthorAlreadyExistsError from '../errors/errorTypes/author-already-exists-error'

export default class AuthorBusiness{

    constructor(){
        this.authorRepository = new AuthorRepository()
    }

    async getAuthors(){
        console.log(`[BUSINESS] Getting all authors from repository`)
        return await this.authorRepository.getAuthors()
    }

    async addAuthor(name){
        console.log(`[BUSINESS] Adding new author on repository: ${name}`)
        let author = new Author(name, [])

        let existingAuthor = this.authorRepository.getAuthorByName(name)

        if (existingAuthor != null) throw new AuthorAlreadyExistsError()
        
        author = await this.authorRepository.insertAuthor(author)
        
        return author
    }

    async getAuthorById(id){
        console.log(`[BUSINESS] Getting author information on repository: ${id}`)
        let author = await this.authorRepository.getAuthorById(id)
        
        if (author == null) throw new NotFoundError(`Author ${id}`)
        
        return author
    }

    async editAuthor(id, name){
        console.log(`[BUSINESS] Edit author information on repository: ${id} | ${name}`)
        
    }

    async deleteAuthor(id){
        console.log(`[BUSINESS] Delete author information on repository: ${id}`)
        let removed = await this.authorRepository.deleteAuthor(id)
        
        console.log(`[BUSINESS] Author ${id} Deleted? ${removed}`)
        if (!removed) throw new NotFoundError(`Author ${id}`)
    }
}