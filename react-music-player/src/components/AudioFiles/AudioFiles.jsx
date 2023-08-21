import React from 'react';

export default function AudioFiles({
    song,
    getSongData,
    index
}) {
    return (
        <div className='player-container' onClick={() => getSongData(song)}>
            <h3> {song.title} </h3>

            <h4> {song.artist} </h4>
        </div >
    )
}