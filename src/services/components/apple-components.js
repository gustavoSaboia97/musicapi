export default class AppleComponents {
    
    constructor(){
        this.APPLE_URI = process.env.APPLE_URI || 'https://itunes.apple.com/search'
    }

    getAppleUri(authorName){
        return this.APPLE_URI + `?term=${authorName}&entity=song&limit=200`
    }
}