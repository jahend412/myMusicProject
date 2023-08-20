import React, { useState } from 'react';
import './App.css';
import Player from './components/player/player';
import { audioData } from './audioData';

export default function App() {
  const [songs, setSongs] = useState(audioData);

  return (
    <div className="App">
      {songs.map((song) => {
        return (
          <Player song={song} />
        )
      })}
    </div >

  );
}
