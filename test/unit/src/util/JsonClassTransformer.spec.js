import JsonClassTransformer from '../../../../src/util/JsonClassTransformer'
import Music from '../../../../src/models/Music'
import Album from '../../../../src/models/Album'
import Author from '../../../../src/models/Author'

let jsonTransformer = new JsonClassTransformer()

it('Should convert class to json without "_"(underscores) Music', () => {
    let music = new Music('Music Name', 'Music Genre', 12345)

    let jsonResult = jsonTransformer.transform(music)

    let jsonString = JSON.stringify(jsonResult)

    expect(jsonString.includes('_')).toEqual(false)
});

it('Should convert class to json without "_"(underscores) Album', () => {
    let album = new Album('Album Name', [])

    let jsonResult = jsonTransformer.transform(album)

    let jsonString = JSON.stringify(jsonResult)

    expect(jsonString.includes('_')).toEqual(false)
});

it('Should convert class to json without "_"(underscores) Author', () => {
    let author = new Author('Author Name', [])

    let jsonResult = jsonTransformer.transform(author)

    let jsonString = JSON.stringify(jsonResult)

    expect(jsonString.includes('_')).toEqual(false)
});