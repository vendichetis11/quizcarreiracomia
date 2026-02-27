import React, { useRef, useEffect, useState } from 'react';

const VideoComponent = () => {
    const videoRef = useRef(null);
    const [showButton, setShowButton] = useState(false);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const checkTime = setInterval(() => {
            if (video.currentTime >= 30 && !showButton) {
                setShowButton(true);
                clearInterval(checkTime);
            }
        }, 1000);

        return () => clearInterval(checkTime);
    }, [showButton]);

    return (
        <div>
            <video ref={videoRef} src="path_to_your_video.mp4" controls />
            {showButton && \
                <button className="cta-button animate">Call to Action</button>
            }
        </div>
    );
};

export default VideoComponent;