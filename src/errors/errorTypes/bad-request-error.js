import ApiError from "./api-error";

export default class BadRequestError extends ApiError{

    constructor(field){
        super(`${field} cannot be blank`, 400);
    }
}