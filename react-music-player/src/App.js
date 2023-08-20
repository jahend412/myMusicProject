import React, { useState } from 'react';
import './App.css';
import AudioFiles from './components/AudioFiles/AudioFiles';
import { audioData } from './audioData';

export default function App() {
  const [songs, setSongs] = useState(audioData);

  return (
    <div className="App">
      {songs.map((song) => {
        return (
          <AudioFiles song={song} />
        )
      })}
    </div >

  );
}
