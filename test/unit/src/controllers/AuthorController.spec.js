import AuthorController from '../../../../src/controllers/AuthorController'
import AuthorBusiness from '../../../../src/business/AuthorBusiness'

jest.mock('../../../../src/business/AuthorBusiness');

authorController = new AuthorController()
authorBusiness = new AuthorBusiness()

beforeEach(() => {
    AuthorBusiness.mockClear()
});
it('Should get all authors', () => {

    const mockAddAuthorBusiness = AuthorBusiness.prototype.addAuthor = jest.fn()

    let response = authorController.addAuthor()

    expect(mockAddAuthorBusiness).toHaveBeenCalled()
})