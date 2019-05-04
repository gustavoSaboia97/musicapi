import Author from '../../../../src/models/author';

let id = "id";
let name = "Author Name";
let albuns = [];

let author = new Author(name, albuns);
author.setId(id);

it('Should set correct data to Album', () => {

    expect(author.getId()).toEqual(id);
    expect(author.getName()).toEqual(name);
    expect(author.getAlbums()).toEqual(albuns);
});