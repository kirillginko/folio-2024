import React, { useState, useRef, useEffect, useContext } from "react";
import styles from "../styles/Player.module.css";
import { Draggable } from "../gsap";
import { WindowContext } from "../WindowContext";

const Player = () => {
  const { isPlayerOpen, togglePlayer } = useContext(WindowContext);
  const draggableRef = useRef(null);
  const handleRef = useRef(null);

  const videoUrl =
    "https://res.cloudinary.com/dtps5ugbf/video/upload/v1719172880/Star_Wars_Episode_I__The_Phantom_Menace_-_Trailer_qtvxds.mp4";
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [volume, setVolume] = useState(1);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    const currentProgress = (video.currentTime / video.duration) * 100;
    setProgress(currentProgress);
  };

  const handleProgressClick = (e) => {
    const progressBar = progressBarRef.current;
    const rect = progressBar.getBoundingClientRect();
    const clickPosition = e.clientX - rect.left;
    const clickRatio = clickPosition / rect.width;
    const video = videoRef.current;
    video.currentTime = clickRatio * video.duration;
  };

  const handleBackward = () => {
    const video = videoRef.current;
    video.currentTime -= 10;
  };

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video.paused) {
      video.play();
    } else {
      video.pause();
    }
  };

  const handleForward = () => {
    const video = videoRef.current;
    video.currentTime += 10;
  };

  const handleVolumeChange = (e) => {
    const newVolume = parseFloat(e.target.value);
    const video = videoRef.current;
    video.volume = newVolume;
    setVolume(newVolume);
  };

  useEffect(() => {
    const video = videoRef.current;
    video.volume = volume;
  }, [volume]);

  useEffect(() => {
    if (isPlayerOpen && typeof window !== "undefined") {
      const draggableInstance = Draggable.create(draggableRef.current, {
        type: "x,y",
        edgeResistance: 0.65,
        bounds: "body",
        inertia: true,
        trigger: handleRef.current, // Set the handle to the navbar
      });

      // Resume the video when player is opened
      if (videoRef.current) {
        videoRef.current.play();
      }

      return () => {
        if (draggableInstance[0]) {
          draggableInstance[0].kill();
        }
      };
    } else {
      // Pause the video when player is closed
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }
  }, [isPlayerOpen]);

  if (!isPlayerOpen) {
    return null;
  }

  return (
    <div className={styles.quickTimeContainer} ref={draggableRef}>
      <div className={styles.windowHeader} ref={handleRef}>
        <div className={styles.buttons}>
          <div className={styles.close} onClick={togglePlayer}></div>
          <div className={styles.minimize}></div>
          <div className={styles.zoom}></div>
        </div>
        <span className={styles.windowTitle}></span>
      </div>
      <div className={styles.videoContainer}>
        <video
          ref={videoRef}
          src={videoUrl}
          className={styles.videoPlayer}
          controls={false}
          autoPlay
          loop
          onTimeUpdate={handleTimeUpdate}
          onClick={handlePlayPause}
        />
      </div>
      <div className={styles.controls}>
        <div className={styles.playbackButtons}>
          <button className={styles.controlButton} onClick={handleBackward}>
            ⏮
          </button>
          <button className={styles.controlButton} onClick={handlePlayPause}>
            ⏯
          </button>
          <button className={styles.controlButton} onClick={handleForward}>
            ⏭
          </button>
        </div>
        <div
          className={styles.progressBar}
          ref={progressBarRef}
          onClick={handleProgressClick}
        >
          <div
            className={styles.progress}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className={styles.volumeControl}>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={volume}
            onChange={handleVolumeChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Player;
