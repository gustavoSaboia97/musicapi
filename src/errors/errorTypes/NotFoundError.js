import ApiError from "./ApiError";

export default class NotFoundError extends ApiError {
    constructor(objectName){
        super(`${objectName} Not Found Error`, 404)
    }
}