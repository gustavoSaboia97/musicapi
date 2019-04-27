export default class Album {

    constructor(name, musics) {
        this.name = name
        this.musics = musics
    }

    getName(){
        return this.name
    }

    getMusics(){
        return this.musics
    }
}