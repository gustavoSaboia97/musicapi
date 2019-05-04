export default class Author {

    constructor(name, albuns){
        this._id = null;
        this.name = name;
        this.albums = albuns;
    }

    setId(id){
        this._id = id;
    }

    getId(){
        return this._id;
    }

    getName(){
        return this.name;
    }

    getAlbums(){
        return this.albums;
    }
}