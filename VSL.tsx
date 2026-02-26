// VideoPlayer.tsx
import React from 'react';

const VideoPlayer = () => {
    return (
        <div style={{
            position: 'relative',
            paddingBottom: '125%', // Changed from 56.25% to 125% for a vertical format
            height: 0,
            overflow: 'hidden',
        }}>
            <iframe
                src="your-video-url-here"
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    border: '0',
                }}
                allowFullScreen
            ></iframe>
        </div>
    );
};

export default VideoPlayer;