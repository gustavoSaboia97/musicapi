import MongoAuthor from '../../../../src/config/mongodb'
import Author from '../../../../src/models/Author'
import AuthorRepository from '../../../../src/repository/AuthorRepository'

jest.mock('../../../../src/config/mongodb');

let authorRepository = new AuthorRepository()

beforeEach(() => {
    MongoAuthor.mockClear()
});

it('Should get all authors', () => {

    let response = authorRepository.getAuthors()

    expect(MongoAuthor.find).toHaveBeenCalled()
})

it('Should get author by id', async () => {

    let id = "id"

    let response = await authorRepository.getAuthorById(id)

    expect(MongoAuthor.findById).toHaveBeenCalled()
})

it('Should delete author by id', async () => {

    let id = "id"

    let response = await authorRepository.deleteAuthor(id)

    expect(MongoAuthor.findByIdAndRemove).toHaveBeenCalled()
})