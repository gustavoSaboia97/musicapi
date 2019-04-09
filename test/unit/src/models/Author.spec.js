import Author from '../../../../src/models/Author'

let name = "Author Name"
let albuns = new Array()

let author = new Author(name, albuns)

it('Should set correct data to Album', () => {

    expect(author.getName()).toEqual(name)
    expect(author.getAlbums()).toEqual(albuns)
})