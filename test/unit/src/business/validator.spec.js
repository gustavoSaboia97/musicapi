import Validator from '../../../../src/business/validator';
import BadRequestError from '../../../../src/errors/errorTypes/bad-request-error';

let validator = new Validator();

it('Throw exception to undefined variable', () => {
    let fieldName = 'fieldName';
    
    expect(() => { validator.validateField(undefined, fieldName); }).toThrow(BadRequestError); 
});

it('Do nothing to defined variable', () => {
    let fieldValue = 'fieldValue';
    let fieldName = 'fieldName';
    
    validator.validateField(fieldValue, fieldName);
});