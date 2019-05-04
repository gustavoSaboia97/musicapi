import Music from '../../../../src/models/music';

let name = "Music Name";
let genre = "Music Genre";
let time = 12345;

let music = new Music(name, genre, time);

it('Should set correct data to Music', () => {

    expect(music.getName()).toEqual(name);
    expect(music.getGenre()).toEqual(genre);
    expect(music.getTrackTimeMillis()).toEqual(time);
});