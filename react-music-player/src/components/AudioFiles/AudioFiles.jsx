import React from 'react';

export default function Player({
    song
}) {
    return (
        <div className='player-container'>
            <h3> {song.title} </h3>

            <h4> {song.artist} </h4>
        </div >
    )
}