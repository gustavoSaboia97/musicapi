import AuthorBusiness from '../../../../src/business/AuthorBusiness'
import JsonClassTransformer from '../../../../src/util/JsonClassTransformer'
import AuthorController from '../../../../src/controllers/AuthorController'

jest.mock('../../../../src/business/AuthorBusiness');
jest.mock('../../../../src/util/JsonClassTransformer');

const mockRequest = {
    session: {},
    body: { name: "NAME" },
    params: {id: "ID"}
}

const mockResponse = {
    json: function (){return {}},
    send: function (){return {}},
    status: function (status){ return mockResponse}
}

beforeEach(() => {
    AuthorBusiness.mockClear()
    JsonClassTransformer.mockClear()
});

it('Should get all authors', () => {
    let authorController = new AuthorController()

    let mockAuthorBusiness = AuthorBusiness.mock.instances[0];
    let mockGetAuthors = mockAuthorBusiness.getAuthors 

    let response = authorController.getAuthors(mockRequest, mockResponse)

    expect(mockGetAuthors).toHaveBeenCalled()
    expect(AuthorBusiness).toHaveBeenCalled()
})

it('Should add authors', () => {
    let authorController = new AuthorController()

    let mockAuthorBusiness = AuthorBusiness.mock.instances[0];
    let mockAddAuthor = mockAuthorBusiness.addAuthor 

    let response = authorController.addAuthor(mockRequest, mockResponse)

    expect(mockAddAuthor).toHaveBeenCalled()
    expect(AuthorBusiness).toHaveBeenCalled()
})

it('Should get author', () => {
    let authorController = new AuthorController()

    let mockAuthorBusiness = AuthorBusiness.mock.instances[0];
    let mockGetAuthor = mockAuthorBusiness.getAuthor 

    let response = authorController.getAuthor(mockRequest, mockResponse)

    expect(mockGetAuthor).toHaveBeenCalled()
    expect(AuthorBusiness).toHaveBeenCalled()
})

it('Should get author', () => {
    let authorController = new AuthorController()

    let mockAuthorBusiness = AuthorBusiness.mock.instances[0];
    let mockEditAuthor = mockAuthorBusiness.editAuthor 

    let response = authorController.editAuthor(mockRequest, mockResponse)

    expect(mockEditAuthor).toHaveBeenCalled()
    expect(AuthorBusiness).toHaveBeenCalled()
})

it('Should delete author', () => {
    let authorController = new AuthorController()

    let mockAuthorBusiness = AuthorBusiness.mock.instances[0];
    let mockDeleteAuthor = mockAuthorBusiness.deleteAuthor 

    let response = authorController.deleteAuthor(mockRequest, mockResponse)

    expect(mockDeleteAuthor).toHaveBeenCalled()
    expect(AuthorBusiness).toHaveBeenCalled()
})
