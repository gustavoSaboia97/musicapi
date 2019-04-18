import MongoAuthor from '../config/mongodb';

export default class AuthorRepository{

    constructor(){}

    async getAuthors(){
        console.log(`Getting authors from database`)

        return MongoAuthor.find()
    }

    async insertAuthor(newAuthor){
        console.log(`Inserting new author in database: ${newAuthor.getName()}`)
        
        let mongoAuthor = MongoAuthor({name: newAuthor.getName(), albums: newAuthor.getAlbums()})

        mongoAuthor.save((err) => {
            if (err) return console.error(`Error inserting new author on database`)
        })
        
        newAuthor.setId(mongoAuthor._id)
        
        return newAuthor
    }
}