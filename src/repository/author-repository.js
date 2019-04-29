import MongoAuthor from '../config/mongodb';

export default class AuthorRepository{

    constructor(){}

    async getAuthors(){
        console.log(`[REPOSITORY] Getting authors`)

        return await MongoAuthor.find()
    }

    async insertAuthor(newAuthor){
        console.log(`[REPOSITORY] Inserting new author in database: ${newAuthor.getName()}`)
        
        let mongoAuthor = MongoAuthor({name: newAuthor.getName(), albums: newAuthor.getAlbums()})

        mongoAuthor.save((err) => {
            if (err) return console.error(`Error inserting new author on database`)
        })
        
        newAuthor.setId(mongoAuthor._id)
        
        return newAuthor
    }

    async getAuthorById(authorId){
        console.log(`[REPOSITORY] Getting author with ID in: ${authorId}`)

        return await MongoAuthor.findById(authorId, (err, author) => {
            if (err) return null
            return author
        })
    }

    async deleteAuthor(authorId){
        console.log(`[REPOSITORY] Deleting author with ID: ${authorId}`)

        return await MongoAuthor.deleteOne({_id:authorId}, err => {
            if (err) return false 
            return true 
        })
    }
}