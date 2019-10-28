import { combineReducers } from 'redux';

//Reducers
const songsReducer = () => {
    return [
        {title: 'n2 Gether Now', duration: '4:33' },
        {title: 'Cult', duration: '5:23' },
        {title: 'Macarena', duration: '2:31' },
        {title: 'Master of Puppets', duration: '8:32' },
    ]
};

const selectedSongReducer = (selectedSong = null, action) => {
    if(action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}

export default combineReducers({
    songs: songsReducer,
    selectedSong: selectedSongReducer,
});