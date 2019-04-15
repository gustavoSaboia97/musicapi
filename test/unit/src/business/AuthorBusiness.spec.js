import AuthorRepository from '../../../../src/repository/AuthorRepository'
import AuthorBusiness from '../../../../src/business/AuthorBusiness'
import mongoose from 'mongoose'

jest.mock('../../../../src/repository/AuthorRepository');

beforeEach(() => {
    AuthorRepository.mockClear()
});

it('Should get all authors', async () => {
    let authorBusiness = new AuthorBusiness()

    let mockAuthorRepository = AuthorRepository.mock.instances[0];
    let mockGetAuthors = mockAuthorRepository.getAuthors 

    let response = await authorBusiness.getAuthors()

    expect(mockGetAuthors).toHaveBeenCalled()
})