import Author from '../../../../src/models/Author'

let id = "id"
let name = "Author Name"
let albuns = new Array()

let author = new Author(name, albuns)
author.setId(id)

it('Should set correct data to Album', () => {

    expect(author.getId()).toEqual(id)
    expect(author.getName()).toEqual(name)
    expect(author.getAlbums()).toEqual(albuns)
})