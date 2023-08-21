import React, { useState } from 'react';
import {
    BsPlayFill, BsPauseFill, BsSkipStartFill, BsSkipEndFill, BsShuffle, BsArrowRepeat, BsVolumeMute, BsVolumeDown, BsVolumeUp,
} from 'react-icons/bs';

export default function Player() {
    const [isPlaying, setIsPlaying] = useState(false);
    const togglePlay = () => {
        setIsPlaying(!isPlaying);
    }

    return (
        <div>
            <div className="player-card">
                <h3 className='activeSong-name'>Track </h3>
                <h5 className='activeArtist-name'>Artist </h5>
                <div className="control-icon">
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


                    <BsSkipStartFill
                        className='icon-2'
                        size={50}
                    />
                    <BsSkipEndFill
                        className='icon-2'
                        size={50}
                    />
                    <BsShuffle
                        className='icon-2'
                        size={50}
                    />
                    <BsArrowRepeat
                        className='icon-2'
                        size={50}
                    />
                    <BsVolumeMute
                        className='icon-2'
                        size={50}
                    />
                    <BsVolumeDown
                        className='icon-2'
                        size={50}
                    />
                    <BsVolumeUp
                        className='icon-2'
                        size={50}
                    />

                </div>
            </div>
        </div>
    );
}