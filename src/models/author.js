export default class Author {

    constructor(name, albuns){
        this.id = null
        this.name = name
        this.albums = albuns
    }

    setId(id){
        this.id = id
    }

    getId(){
        return this.id
    }

    getName(){
        return this.name
    }

    getAlbums(){
        return this.albums
    }
}