export default class Author{

    constructor(name, albuns){
        this._name = name
        this._albums = albuns
    }

    getName(){
        return this._name
    }

    getAlbums(){
        return this._albums
    }
}