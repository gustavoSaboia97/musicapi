import JsonClassTransformer from '../../../../src/util/JsonClassTransformer'

jest.mock(JSON)

beforeEach(() => {
    JSON.mockClear()
});

it('Should convert class to json without "_"(underscores) ', () => {

    var jsonResponse = dataExtractor.extractDataFromAdmin()

    var url = "http://odin-dev.cloud.dev.globoi.com/ort/api/wall/1/"

    expect(Request).toHaveBeenCalledWith(url, env.ODIN_AUTH)
});