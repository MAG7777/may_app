import { useRef, useState,type ChangeEvent } from "react";

const CustomVideoPlayer = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null); // Создаем ref для видео
    const [isPlaying, setIsPlaying] = useState(false); // Состояние для воспроизведения

    const handlePlayPause = () => {

        const video = videoRef.current;
        if (!video) return;

        if (video.paused) {
            video.play();
            setIsPlaying(true);
        } else {
            video.pause();
            setIsPlaying(false);
        }
    };

    const handleVolumeChange = (e: ChangeEvent<HTMLInputElement>) => {
        const video = videoRef.current;
        if (video) {
          video.volume = parseFloat(e.target.value);
        }
    };

    return (
        <div>
            <video ref={videoRef} width="400" controls>
                <source
                    src="https://www.w3schools.com/html/mov_bbb.mp4"
                    type="video/mp4"
                />
                Ваш браузер не поддерживает видео.
            </video>
            <div>
                <button onClick={handlePlayPause}>
                    {isPlaying ? "Pause" : "Play"}
                </button>
                <input
                    type="range"
                    min="0"
                    max="1"
                    step="0.1"
                    defaultValue="0.5"
                    onChange={handleVolumeChange}
                />
            </div>
        </div>
    );
};

export default CustomVideoPlayer;