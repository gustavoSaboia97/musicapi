import Author from '../../../../src/config/mongodb'
import AuthorRepository from '../../../../src/repository/AuthorRepository'

jest.mock('../../../../src/config/mongodb');

beforeEach(() => {
    Author.mockClear()
});

it('Should get all authors', async () => {
    let authorRepository = new AuthorRepository()

    let response = await authorRepository.getAuthors()

    expect(Author.find).toHaveBeenCalled()
})