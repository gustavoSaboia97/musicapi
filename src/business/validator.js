import BadRequestError from '../errors/errorTypes/bad-request-error';

export default class Validator {

    validateField(fieldValue, fieldName){
        console.log(`[VALIDATOR] Validating ${fieldName} with value ${fieldValue}`);
        if (fieldValue == undefined) throw new BadRequestError(fieldName);
    }
}