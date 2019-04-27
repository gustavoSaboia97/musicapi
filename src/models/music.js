export default class Music {

    constructor(name, genre, trackTimeMillis) {
        this.name =  name
        this.genre = genre
        this.trackTimeMillis = trackTimeMillis
    }

    getName(){
        return this.name
    } 
    
    getGenre(){
        return this.genre
    } 

    getTrackTimeMillis(){
        return this.trackTimeMillis
    }
}