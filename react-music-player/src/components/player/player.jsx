import React from 'react';
import {
    BsPlayBtn, BsPauseBtn, BsSkipStartFill, BsSkipEndFill, BsShuffle, BsArrowRepeat, BsVolumeMute, BsVolumeDown, BsVolumeUp,
} from 'react-icons/bs';

export default function Player() {
    return (
        <div>
            <div className="player-card">
                <div className="control-icon">
                    <BsPlayBtn
                        color='white'
                        size={50} />
                    <BsPauseBtn
                        color='white'
                        size={50} />
                    <BsSkipStartFill
                        color='white'
                        size={50} />
                    <BsSkipEndFill
                        color='white'
                        size={50} />
                    <BsShuffle
                        color='white'
                        size={50} />
                    <BsArrowRepeat
                        color='white'
                        size={50} />
                    <BsVolumeMute
                        color='white'
                        size={50} />
                    <BsVolumeDown
                        color='white'
                        size={50} />
                    <BsVolumeUp
                        color='white'
                        size={50} />
                </div>
            </div>
        </div>
    );   
}