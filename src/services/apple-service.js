import AppleApiUtils from './util/apple-api-utils';
import AppleComponents from './components/apple-components';
import axios from 'axios';
import AuthorBuilder from './builders/author-builder';

export default class AppleService {
    constructor(){
        this.appleApiUtils = new AppleApiUtils();
        this.appleComponents = new AppleComponents();
        this.authorBuilder = new AuthorBuilder();
    }

    async getAuthorDataFromApi(authorName){
        console.log(`[APPLE SERVICE] Requesting data to author ${authorName}`);

        let formatedName = this.appleApiUtils.changeNameToApiFormat(authorName);

        let appleUri = this.appleComponents.getAppleUri(formatedName);

        console.log(`[APPLE SERVICE] Requesting data to URI: ${appleUri}`)

        let apiResponse = await axios.get(appleUri);

        let author = this.authorBuilder.build(authorName, apiResponse.data.results);
        
        return author;
    }
}