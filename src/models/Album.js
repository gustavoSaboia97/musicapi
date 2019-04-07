export default class Album{

    constructor(name, musics) {
        this._name = name
        this._musics = musics
    }

    getName(){
        return this._name
    }

    getMusics(){
        return this._musics
    }
}