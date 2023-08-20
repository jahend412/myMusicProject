import React from 'react';
import './player.css';


export default function Player({ song }) {
    return (
        <div className='player-container'>
            < h1 > {song.title}</h1 >
            <p> {song.artist} </p>
        </div >
    );
}


// export default class Player extends Component {

