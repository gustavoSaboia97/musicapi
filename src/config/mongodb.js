import mongoose from 'mongoose'

const MONGO_DB_URI = process.env.MONGO_DB_URI || 'mongodb://localhost:27017/music'

mongoose.connect(MONGO_DB_URI, { useNewUrlParser: true })

const Schema = mongoose.Schema

const authorSchema = new Schema({
    name: String,
    albuns: Array 
})

const Author = mongoose.model('Author', authorSchema)

export default Author