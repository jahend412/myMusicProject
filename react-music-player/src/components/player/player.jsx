import React, { useState, useRef } from 'react';
import { useEffect } from 'react';
import {
    BsPlayFill, BsPauseFill, BsSkipStartFill, BsSkipEndFill, // BsShuffle, BsArrowRepeat, BsVolumeMute, BsVolumeDown, BsVolumeUp,
} from 'react-icons/bs';

export default function Player({
    currentSong,
    currentIndex
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
                {currentSong ? (
                    <div>
                        <h3 className='activeSong-name'>{currentSong.title} </h3>
                        <h5 className='activeArtist-name'>{currentSong.artist} </h5>
                    </div>
                ) : (
                    ''
                )}

                <div className="control-icon">
                    <BsSkipStartFill
                        className='icon-2'
                        size={50}
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
                    />


                </div>
            </div>
        </div>
    );
}