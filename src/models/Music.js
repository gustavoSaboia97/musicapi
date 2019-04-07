export default class Music{

    constructor(name, genre, trackTimeMillis) {
        this._name =  name
        this._genre = genre
        this._trackTimeMillis = trackTimeMillis
    }

    getName(){
        return this._name
    } 
    
    getGenre(){
        return this._genre
    } 

    getTrackTimeMillis(){
        return this._trackTimeMillis
    }
}