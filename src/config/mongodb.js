import mongoose from 'mongoose';

const MONGO_DB_URI = process.env.MONGO_DB_URI || 'mongodb://localhost:27017/music';

mongoose.connect(MONGO_DB_URI, { useNewUrlParser: true })
        .then( () => { console.log("Connected to database"); }, 
              err => { console.log(`Error: ${err}`); });

const authorSchema = mongoose.Schema({
    name: String,
    albums: Array 
},
{
    versionKey: false
});

export default mongoose.model('MongoAuthor', authorSchema);
