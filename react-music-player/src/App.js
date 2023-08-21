import React, { useState } from 'react';
import './App.css';
import AudioFiles from './components/AudioFiles/AudioFiles';
import { audioData } from './audioData';
import Player from './components/Player/Player';

export default function App() {
  const [songs, setSongs] = useState(audioData);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentSong, setCurrentSong] = useState({});
  const getSongData = (song, index) => {
    setCurrentIndex(index)
    setCurrentSong(song)
  }
  return (

    <>
      <div className='player-main'>
        <Player
          currentSong={currentSong}
          currentIndex={currentIndex}
        />
      </div>

      <div className="App">
        {songs.map((song, index) => {
          return (
            <AudioFiles
              song={song}
              getSongData={getSongData}
            />
          )
        })}
      </div >
    </>
  );
}
