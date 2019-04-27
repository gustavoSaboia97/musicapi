import AuthorRepository from '../../../../src/repository/author-repository'
import AuthorBusiness from '../../../../src/business/author-business'
import NotFoundError from '../../../../src/errors/errorTypes/not-found-error'

jest.mock('../../../../src/repository/author-repository');

beforeEach(() => {
    AuthorRepository.mockClear()
});

it('Should get all authors', () => {
    let authorBusiness = new AuthorBusiness()

    let mockAuthorRepository = AuthorRepository.mock.instances[0];
    let mockGetAuthors = mockAuthorRepository.getAuthors 

    let response = authorBusiness.getAuthors()

    expect(mockGetAuthors).toHaveBeenCalled()
})

it('Should NOT delete author by id, but raise an error', async () => {
    let authorBusiness = new AuthorBusiness()
    let id = 'id'
    let removed = false

    let mockAuthorRepository = AuthorRepository.mock.instances[0];
    let mockDeleteAuthor = mockAuthorRepository.deleteAuthor 

    mockDeleteAuthor.mockReturnValue(removed)
    
    await expect(authorBusiness.deleteAuthor(id)).rejects.toThrow(NotFoundError)
})

it('Should delete author by id', async () => {
    let authorBusiness = new AuthorBusiness()
    let id = 'id'
    let removed = true

    let mockAuthorRepository = AuthorRepository.mock.instances[0];
    let mockDeleteAuthor = mockAuthorRepository.deleteAuthor 

    mockDeleteAuthor.mockReturnValue(removed)

    await authorBusiness.deleteAuthor(id)

    expect(mockDeleteAuthor).toHaveBeenCalled()
})