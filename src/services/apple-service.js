import AppleApiUtils from './util/apple-api-utils';
import AppleComponents from './components/apple-components';
import axios from 'axios';

export default class AppleService {
    constructor(){
        this.appleApiUtils = new AppleApiUtils();
        this.appleComponents = new AppleComponents();
    }

    async getAuthorDataFromApi(authorName){
        console.log(`[APPLE SERVICE] Requesting data to author ${authorName}`);

        let formatedName = this.appleApiUtils.changeNameToApiFormat(authorName);

        let appleUri = this.appleComponents.getAppleUri(formatedName);

        let apiResponse = await axios.get(appleUri);
    }
}