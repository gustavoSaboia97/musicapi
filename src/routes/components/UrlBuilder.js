export default class UrlBuilder{

    constructor(){
        this.API = '/api'
        this.HEALTH = this.API + '/health'
        this.AUTHOR = this.API + '/author'
        this.AUTHOR_ID = this.AUTHOR + '/:id'
    }
}