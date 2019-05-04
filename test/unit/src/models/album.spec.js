import Album from '../../../../src/models/album';

let name = "Album Name";
let musics = [];

let album = new Album(name, musics);

it('Should set correct data to Album', () => {

    expect(album.getName()).toEqual(name);
    expect(album.getMusics()).toEqual(musics);
});