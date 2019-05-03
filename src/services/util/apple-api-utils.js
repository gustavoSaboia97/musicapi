export default class AppleApiUtils {
    constructor(){}

    changeNameToApiFormat(authorName){

        return authorName.replace(" ", "+");
    }
}