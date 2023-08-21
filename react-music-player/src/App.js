import React, { useState } from 'react';
import './App.css';
import AudioFiles from './components/AudioFiles/AudioFiles';
import { audioData } from './audioData';
import Player from './components/Player/Player';

export default function App() {
  const [songs, setSongs] = useState(audioData);
  const [currentIndex, setCurrentIndex] = useState(null);
  const [currentSong, setCurrentSong] = useState(songs[0]);
  const getSongData = (song, index) => {
    setCurrentIndex(index)
    setCurrentSong(song)
  }

  const nextSong = () => {
    setCurrentIndex(currentIndex + 1)
    setCurrentSong(audioData[currentIndex + 1])
  }

  const prevSong = () => {
    setCurrentIndex(currentIndex - 1)
    setCurrentSong(audioData[currentIndex - 1])
  }

  return (

    <>
      <div className='player-main'>
        <Player
          currentSong={currentSong}
          currentIndex={currentIndex}
          nextSong={nextSong}
          prevSong={prevSong}
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
