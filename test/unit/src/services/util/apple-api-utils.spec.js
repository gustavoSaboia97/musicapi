import AppleApiUtils from '../../../../../src/services/util/apple-api-utils';

let appleApiUtils = new AppleApiUtils();
let name = "Author Name";

it('Should change spaces to +', () => {
    let expectedName = 'Author+Name';

    let newName = appleApiUtils.changeNameToApiFormat(name);

    expect(newName).toEqual(expectedName);
});