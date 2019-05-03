import AuthorBusiness from '../../../../src/business/author-business';
import AuthorController from '../../../../src/controllers/author-controller';

jest.mock('../../../../src/business/author-business');

const mockRequest = {
    session: {},
    body: { name: "NAME" },
    params: {id: "ID"}
};

const mockResponse = {
    json: function (){ return {}; },
    send: function (){ return {}; },
    status: function (status){ return mockResponse; }
};

beforeEach(() => {
    AuthorBusiness.mockClear();
});

it('Should get all authors', async () => {
    let authorController = new AuthorController();

    let mockAuthorBusiness = AuthorBusiness.mock.instances[0];
    let mockGetAuthors = mockAuthorBusiness.getAuthors;

    let response = await authorController.getAuthors(mockRequest, mockResponse);

    expect(mockGetAuthors).toHaveBeenCalled();
    expect(AuthorBusiness).toHaveBeenCalled();
});

it('Should add authors', async () => {
    let authorController = new AuthorController();

    let mockAuthorBusiness = AuthorBusiness.mock.instances[0];
    let mockAddAuthor = mockAuthorBusiness.addAuthor;

    let response = await authorController.addAuthor(mockRequest, mockResponse);

    expect(mockAddAuthor).toHaveBeenCalled();
    expect(AuthorBusiness).toHaveBeenCalled();
});

it('Should get author by id', async () => {
    let authorController = new AuthorController();

    let mockAuthorBusiness = AuthorBusiness.mock.instances[0];
    let mockGetAuthor = mockAuthorBusiness.getAuthorById;

    let response = await authorController.getAuthor(mockRequest, mockResponse);

    expect(mockGetAuthor).toHaveBeenCalled();
    expect(AuthorBusiness).toHaveBeenCalled();
});

it('Should edit author', async () => {
    let authorController = new AuthorController();

    let mockAuthorBusiness = AuthorBusiness.mock.instances[0];
    let mockEditAuthor = mockAuthorBusiness.editAuthor; 

    let response = await authorController.editAuthor(mockRequest, mockResponse);

    expect(mockEditAuthor).toHaveBeenCalled();
    expect(AuthorBusiness).toHaveBeenCalled();
});

it('Should delete author', async () => {
    let authorController = new AuthorController();

    let mockAuthorBusiness = AuthorBusiness.mock.instances[0];
    let mockDeleteAuthor = mockAuthorBusiness.deleteAuthor;

    mockDeleteAuthor.mockReturnValue({status:200, msg:'msg'});

    await authorController.deleteAuthor(mockRequest, mockResponse);

    expect(mockDeleteAuthor).toHaveBeenCalled();
    expect(AuthorBusiness).toHaveBeenCalled();
});