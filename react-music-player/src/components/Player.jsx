import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import Music from '../assets/music.png';
import {
    BsPlayFill, BsPauseFill, BsSkipStartFill, BsSkipEndFill, // BsShuffle, BsArrowRepeat, BsVolumeMute, BsVolumeDown, BsVolumeUp,
} from 'react-icons/bs';

export default function Player({
    currentSong,
    currentIndex,
    nextSong,
    prevSong
}) {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null)
    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    }
    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play();
        }
        else {
            audioRef.current.pause();
        }
    }, [isPlaying, currentIndex])
    return (
        <div>
            <audio
                ref={audioRef}
                src={currentSong.music}
            >
            </audio>
            <div className="player-card">
                <div className="image-container">
                    <img className='music-image' src={Music} alt="Band Image" />
                </div>

                {currentSong ? (
                    <div>
                        <h2 className='activeSong-name'>{currentSong.title} </h2>
                        <h4 className='activeArtist-name'>{currentSong.artist} </h4>
                    </div>
                ) : (
                    ''
                )}

                <div className="control-icon">
                    <BsSkipStartFill
                        className='icon-2'
                        size={50}
                        onClick={prevSong}
                    />

                    {isPlaying ? (
                        <BsPauseFill
                            className='icon-1'
                            size={50}
                            onClick={togglePlay}
                        />
                    ) : (
                        <BsPlayFill
                            className='icon-1'
                            size={50}
                            onClick={togglePlay}
                        />)}
                    <BsSkipEndFill
                        className='icon-2'
                        size={50}
                        onClick={nextSong}
                    />


                </div>
            </div>
        </div>
    );
}