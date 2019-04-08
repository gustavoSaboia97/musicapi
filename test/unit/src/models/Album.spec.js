import Album from '../../../../src/models/Album'

let name = "Album Name"
let musics = new Array()

let album = new Album(name, musics)

it('Should set correct data to Album', () => {

    expect(album.getName()).toEqual(name)
    expect(album.getMusics()).toEqual(musics)
});