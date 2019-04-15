import Author from '../config/mongodb'

export default class AuthorRepository{

    constructor(){}

    async getAuthors(){
        console.log(`Getting authors from database`)
        return Author.find()
    }
}