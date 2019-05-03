import ApiError from "./api-error";

export default class AuthorAlreadyExistsError extends ApiError{

    constructor(){
        super(`Author Already Exists`, 409);
    }
}