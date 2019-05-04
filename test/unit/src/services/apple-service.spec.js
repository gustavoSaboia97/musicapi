import AppleService from '../../../../src/services/apple-service';
import AppleApiUtils from '../../../../src/services/util/apple-api-utils';
import AppleComponents from '../../../../src/services/components/apple-components';
import axios from 'axios';
import AuthorBuilder from '../../../../src/services/builders/author-builder';


jest.mock('../../../../src/services/util/apple-api-utils');
jest.mock('../../../../src/services/components/apple-components');
jest.mock('../../../../src/services/builders/author-builder');
jest.mock('axios');

let name = 'Author Name';
let formatedName = 'Author+Name';
let uri = 'https://fake-api.com.br/';
let apiResponse = {data: {results: []}};

beforeEach(() => {
    AppleComponents.mockClear();
    AppleApiUtils.mockClear();
    axios.mockClear();
    AuthorBuilder.mockClear();
});

it('Should get author data from apple api', async () => {

    let appleService = new AppleService();

    let mockAppleApiUtils = AppleApiUtils.mock.instances[0];
    let mockApiFormat = mockAppleApiUtils.changeNameToApiFormat;

    let mockAppleComponents = AppleComponents.mock.instances[0];
    let mockGetAppleUri = mockAppleComponents.getAppleUri;

    let mockAuthorBuilder = AuthorBuilder.mock.instances[0];
    let mockAuthorBuild = mockAuthorBuilder.build

    let mockAxiosGet = axios.get;

    mockApiFormat.mockReturnValue(formatedName);
    mockGetAppleUri.mockReturnValue(uri);
    mockAxiosGet.mockReturnValue(apiResponse);

    let response = await appleService.getAuthorDataFromApi(name);

    expect(mockApiFormat).toHaveBeenCalledWith(name);
    expect(mockAxiosGet).toHaveBeenCalledWith(uri);
    expect(mockAuthorBuild).toHaveBeenCalledWith(name, apiResponse.data.results);
});
