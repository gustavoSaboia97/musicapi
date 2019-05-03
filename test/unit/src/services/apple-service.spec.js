import AppleService from '../../../../src/services/apple-service';
import AppleApiUtils from '../../../../src/services/util/apple-api-utils';

jest.mock('../../../../src/services/util/apple-api-utils');

beforeEach(() => {
    AppleApiUtils.mockClear();
});

it('Should get author data from apple api', async () => {
    let appleService = new AppleService();
    let name = 'Author Name';
    let formatedName = 'Author+Name';

    let mockAppleApiUtils = AppleApiUtils.mock.instances[0];
    let mockApiFormat = mockAppleApiUtils.changeNameToApiFormat;

    mockApiFormat.mockReturnValue(formatedName);

    let response = await appleService.getAuthorDataFromApi(name);

    expect(mockApiFormat).toHaveBeenCalled();
});
