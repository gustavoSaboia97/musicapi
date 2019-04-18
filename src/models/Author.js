export default class Author{

    constructor(name, albuns){
        this._name = name
        this._albums = albuns
    }

    setId(id){
        this._id = id
    }

    getId(){
        return this._id
    }

    getName(){
        return this._name
    }

    getAlbums(){
        return this._albums
    }
}