import AuthorRepository from '../repository/author-repository';
import AppleService from '../services/apple-service';
import Author from '../models/author';
import NotFoundError from '../errors/errorTypes/not-found-error';
import AuthorAlreadyExistsError from '../errors/errorTypes/author-already-exists-error';
import Validator from './validator';

export default class AuthorBusiness{

    constructor(){
        this.authorRepository = new AuthorRepository();
        this.validator = new Validator();
        this.appleService = new AppleService();
    }

    async getAuthors(){
        console.log(`[BUSINESS] Getting all authors from repository`);
        return await this.authorRepository.getAuthors();
    }

    async addAuthor(name){
        console.log(`[BUSINESS] Adding new author on repository: ${name}`);

        this.validator.validateField(name, 'name');

        let existingAuthor = await this.authorRepository.getAuthorByName(name);
        
        if (existingAuthor != null) throw new AuthorAlreadyExistsError();

        let author = await this.appleService.getAuthorDataFromApi(name);
        
        let addedAuthor = await this.authorRepository.insertAuthor(author);
        
        return addedAuthor;
    }

    async getAuthorById(id){
        console.log(`[BUSINESS] Getting author information on repository: ${id}`);
        let author = await this.authorRepository.getAuthorById(id);
        
        if (author == null) throw new NotFoundError(`Author ${id}`);
        
        return author;
    }

    async editAuthor(id, name){
        console.log(`[BUSINESS] Edit author information on repository: ${id} | ${name}`);
        
        this.validator.validateField(name, 'name');

        let author = await this.authorRepository.getAuthorById(id);

        if (author == null) throw new NotFoundError(`Author ${id}`);

        author = await this.authorRepository.editAuthor(id, name);

        return author;
    }

    async deleteAuthor(id){
        console.log(`[BUSINESS] Delete author information on repository: ${id}`);
        let removed = await this.authorRepository.deleteAuthor(id);
        
        console.log(`[BUSINESS] Author ${id} Deleted? ${removed}`);
        if (!removed) throw new NotFoundError(`Author ${id}`);
    }
}