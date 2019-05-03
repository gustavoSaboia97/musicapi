import AppleService from '../../../../src/services/apple-service';
import AppleApiUtils from '../../../../src/services/util/apple-api-utils';
import AppleComponents from '../../../../src/services/components/apple-components';
import axios from 'axios';

jest.mock('../../../../src/services/util/apple-api-utils');
jest.mock('../../../../src/services/components/apple-components');
jest.mock('axios');

beforeEach(() => {
    axios.mockClear();
    AppleApiUtils.mockClear();
    AppleComponents.mockClear();

    axios.get.mockImplementationOnce(() =>
        Promise.resolve({
            data: { json: "{}" }
        })
    );
});

it('Should get author data from apple api', async () => {
    let appleService = new AppleService();
    let name = 'Author Name';
    let formatedName = 'Author+Name';
    let uri = 'https://fake-api.com.br/';

    let mockAppleApiUtils = AppleApiUtils.mock.instances[0];
    let mockApiFormat = mockAppleApiUtils.changeNameToApiFormat;

    let mockAppleComponents = AppleComponents.mock.instances[0];
    let mockGetAppleUri = mockAppleComponents.getAppleUri;

    let mockAxiosGet = axios.get;

    mockApiFormat.mockReturnValue(formatedName);
    mockGetAppleUri.mockReturnValue(uri);

    let response = await appleService.getAuthorDataFromApi(name);

    expect(mockApiFormat).toHaveBeenCalledWith(name);
    expect(mockAxiosGet).toHaveBeenCalledWith(uri);
});
