import Music from '../../models/music'
import Album from '../../models/album'
import Author from '../../models/author'
import _ from 'lodash';

export default class AuthorBuilder{

    build(authorName, appleMusics){

        let albums = []
        let musicGroups = _.groupBy(appleMusics, 'collectionCensoredName');
        let albumsNames = []

        appleMusics.forEach( (appleMusic) => {
            let albumName = appleMusic.collectionCensoredName;

            if (!albumsNames.includes(albumName)) { 

                let album = this.getAlbum(albumName, musicGroups[albumName]);
                
                albumsNames.push(albumName);
                albums.push(album);
            }
        });

        return new Author(authorName, albums)
    }

    getAlbum(albumName, albumMusics){

        let musics = [];

        albumMusics.forEach((albumMusic) => {

            let music = this.getMusic(albumMusic)                    
            
            musics.push(music);
        });

        return new Album(albumName, musics);
    }

    getMusic(albumMusic){

        let musicName = albumMusic.trackCensoredName;
        let musicGenre = albumMusic.primaryGenreName;
        let musicTrackTimeMillis = albumMusic.trackTimeMillis;

        return new Music(musicName, musicGenre, musicTrackTimeMillis);
    }
}