import AppleApiUtils from './util/apple-api-utils'

export default class AppleService {
    constructor(){
        this.appleApiUtils = new AppleApiUtils()
    }

    getAuthorDataFromApi(authorName){
        console.log(`[APPLE SERVICE] Requesting data to author ${authorName}`)

        let formatedName = this.appleApiUtils.changeNameToApiFormat(authorName)
    }
}