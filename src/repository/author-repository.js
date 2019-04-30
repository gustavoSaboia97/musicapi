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
        console.log(`[REPOSITORY] Getting author with ID: ${authorId}`)

        return await MongoAuthor.findById(authorId, (err, author) => {
            if (err) return null
            return author
        })
    }

    async getAuthorByName(authorName){
        console.log(`[REPOSITORY] Getting author with Name: ${authorName}`)
        let authorQuery = {name: authorName}

        return await MongoAuthor.findOne(authorName, (err, author) => {
            if (err) return null
            return author
        })
    }

    async editAuthor(authorId, newAuthorName){
        console.log(`[REPOSITORY] Getting author with Name: ${newAuthorName}`)
        let queryName = {name: newAuthorName}
        let optionsQuery = {new: true}

        return await MongoAuthor.findByIdAndUpdate(authorId, queryName, optionsQuery, (err, author) => {
            if (err) return null
            return author
        })
    }

    async deleteAuthor(authorId){
        console.log(`[REPOSITORY] Deleting author with ID: ${authorId}`)
        let idQuery = {_id: authorId}

        return await MongoAuthor.deleteOne(idQuery, err => {
            if (err) return false 
            return true 
        })
    }
}