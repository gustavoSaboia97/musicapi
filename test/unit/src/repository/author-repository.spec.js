import MongoAuthor from '../../../../src/config/mongodb'
import Author from '../../../../src/models/author'
import AuthorRepository from '../../../../src/repository/author-repository'

jest.mock('../../../../src/config/mongodb');

let authorRepository = new AuthorRepository()
let mockedFunctions = {
    save : () => {}
}

beforeEach(() => {
    MongoAuthor.mockClear()
});

it('Should get all authors from database', () => {

    let response = authorRepository.getAuthors()

    expect(MongoAuthor.find).toHaveBeenCalled()
})

it('Should add new author to database', async () => {
    let author = new Author('Name', [])

    MongoAuthor.mockReturnValue(mockedFunctions)

    let response = await authorRepository.insertAuthor(author)

    expect(MongoAuthor).toHaveBeenCalled()
})

it('Should get author by id', async () => {

    let id = "id"

    let response = await authorRepository.getAuthorById(id)

    expect(MongoAuthor.findById).toHaveBeenCalled()
})