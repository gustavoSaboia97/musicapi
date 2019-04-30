import AuthorRepository from '../../../../src/repository/author-repository'
import AuthorBusiness from '../../../../src/business/author-business'
import NotFoundError from '../../../../src/errors/errorTypes/not-found-error'
import Author from '../../../../src/models/author';
import AuthorAlreadyExistsError from '../../../../src/errors/errorTypes/author-already-exists-error'

jest.mock('../../../../src/repository/author-repository');

beforeEach(() => {
    AuthorRepository.mockClear()
});

it('Should get all authors', async () => {
    let authorBusiness = new AuthorBusiness()

    let mockAuthorRepository = AuthorRepository.mock.instances[0]
    let mockGetAuthors = mockAuthorRepository.getAuthors 

    let response = await authorBusiness.getAuthors()

    expect(mockGetAuthors).toHaveBeenCalled()
})

it('Should say that author already exists', async () => {
    let authorBusiness = new AuthorBusiness()
    let name = 'Author Name'
    let author = new Author(name, [])

    let mockAuthorRepository = AuthorRepository.mock.instances[0]
    let mockGetAuthor = mockAuthorRepository.getAuthorByName
    let mockInsertAuthor = mockAuthorRepository.insertAuthor
    
    mockGetAuthor.mockReturnValue(author)

    await expect(authorBusiness.addAuthor(name)).rejects.toThrow(AuthorAlreadyExistsError)    
})

it('Should insert new author', async () => {
    let authorBusiness = new AuthorBusiness()
    let name = 'Author Name'
    let author = null

    let mockAuthorRepository = AuthorRepository.mock.instances[0]
    let mockGetAuthor = mockAuthorRepository.getAuthorByName
    let mockInsertAuthor = mockAuthorRepository.insertAuthor

    mockGetAuthor.mockReturnValue(author)

    let response = await authorBusiness.addAuthor(name)

    expect(mockGetAuthor).toHaveBeenCalled()
    expect(mockInsertAuthor).toHaveBeenCalled()
})

it('Should Not found author data when get user data by id', async () => {
    let authorBusiness = new AuthorBusiness()
    let author = null
    let id = 'id'

    let mockAuthorRepository = AuthorRepository.mock.instances[0]
    let mockGetAuthor = mockAuthorRepository.getAuthorById 

    mockGetAuthor.mockReturnValue(author)

    await expect(authorBusiness.getAuthorById(id)).rejects.toThrow(NotFoundError)
})

it('Should get author data', async () => {
    let authorBusiness = new AuthorBusiness()
    let author = new Author('Name', [])
    let id = 'id'

    let mockAuthorRepository = AuthorRepository.mock.instances[0]
    let mockGetAuthor = mockAuthorRepository.getAuthorById 

    mockGetAuthor.mockReturnValue(author)

    let response = await authorBusiness.getAuthorById(id)

    expect(mockGetAuthor).toHaveBeenCalled()
})

it('Should return not found when editing author data', async () => {
    let authorBusiness = new AuthorBusiness()
    let author = null
    let id = 'id'
    let name = 'name'

    let mockAuthorRepository = AuthorRepository.mock.instances[0]
    let mockEditAuthor = mockAuthorRepository.editAuthor
    let mockGetAuthor = mockAuthorRepository.getAuthorById

    mockGetAuthor.mockReturnValue(author)

    await expect(authorBusiness.editAuthor(id, name)).rejects.toThrow(NotFoundError)
})


it('Should edit author data', async () => {
    let authorBusiness = new AuthorBusiness()
    let author = new Author('Name', [])
    let id = 'id'
    let name = 'name'

    let mockAuthorRepository = AuthorRepository.mock.instances[0]
    let mockEditAuthor = mockAuthorRepository.editAuthor
    let mockGetAuthor = mockAuthorRepository.getAuthorById

    mockGetAuthor.mockReturnValue(author)

    let response = await authorBusiness.editAuthor(id, name)

    expect(mockGetAuthor).toHaveBeenCalled()
    expect(mockEditAuthor).toHaveBeenCalled()
})

it('Should NOT delete author by id, but raise an error', async () => {
    let authorBusiness = new AuthorBusiness()
    let id = 'id'
    let removed = false

    let mockAuthorRepository = AuthorRepository.mock.instances[0]
    let mockDeleteAuthor = mockAuthorRepository.deleteAuthor 

    mockDeleteAuthor.mockReturnValue(removed)
    
    await expect(authorBusiness.deleteAuthor(id)).rejects.toThrow(NotFoundError)
})

it('Should delete author by id', async () => {
    let authorBusiness = new AuthorBusiness()
    let id = 'id'
    let removed = true

    let mockAuthorRepository = AuthorRepository.mock.instances[0]
    let mockDeleteAuthor = mockAuthorRepository.deleteAuthor 

    mockDeleteAuthor.mockReturnValue(removed)

    await authorBusiness.deleteAuthor(id)

    expect(mockDeleteAuthor).toHaveBeenCalled()
})