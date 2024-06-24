import React, { useState, useEffect, useContext, useRef } from "react";
import styles from "../styles/Player.module.css";
import { Draggable } from "../gsap";
import { PlayerContext } from "../PlayerContext";

const Player = () => {
  const {
    isPlayerOpen,
    togglePlayer,
    videoRef,
    currentTime,
    playlist,
    currentVideoIndex,
    nextVideo,
    prevVideo,
  } = useContext(PlayerContext);
  const draggableRef = useRef(null);
  const handleRef = useRef(null);

  const progressBarRef = useRef(null);
  const [progress, setProgress] = useState(0);

  const handleTimeUpdate = () => {
    const video = videoRef.current;
    if (video) {
      const currentProgress = (video.currentTime / video.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleProgressClick = (e) => {
    const progressBar = progressBarRef.current;
    if (progressBar && videoRef.current) {
      const rect = progressBar.getBoundingClientRect();
      const clickPosition = e.clientX - rect.left;
      const clickRatio = clickPosition / rect.width;
      const video = videoRef.current;
      video.currentTime = clickRatio * video.duration;
    }
  };

  const handleBackward = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime -= 10;
    }
  };

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (video) {
      if (video.paused) {
        video.play().catch((error) => {
          console.error("Autoplay prevented: ", error);
        });
      } else {
        video.pause();
      }
    }
  };

  const handleForward = () => {
    const video = videoRef.current;
    if (video) {
      video.currentTime += 10;
    }
  };

  useEffect(() => {
    if (isPlayerOpen && typeof window !== "undefined") {
      const draggableInstance = Draggable.create(draggableRef.current, {
        type: "x,y",
        edgeResistance: 0.65,
        bounds: "body",
        inertia: true,
        trigger: handleRef.current, // Set the handle to the navbar
      });

      // Set the current time and volume when player is opened
      if (videoRef.current) {
        videoRef.current.currentTime = currentTime;
        videoRef.current.volume = 0.5; // Set the volume to 50%
      }

      return () => {
        if (draggableInstance[0]) {
          draggableInstance[0].kill();
        }
      };
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [isPlayerOpen, currentTime]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.src = playlist[currentVideoIndex];
      videoRef.current.onloadedmetadata = () => {
        videoRef.current.currentTime = currentTime; // Ensure the current time is set when metadata is loaded
      };
      videoRef.current.volume = 0.5; // Set the volume to 50%
    }
  }, [currentVideoIndex, playlist, currentTime]);

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      const handleEnded = () => {
        nextVideo();
      };

      video.addEventListener("ended", handleEnded);

      return () => {
        video.removeEventListener("ended", handleEnded);
      };
    }
  }, [nextVideo]);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch((error) => {
        console.error("Autoplay prevented: ", error);
      });
    }
  }, [currentVideoIndex]);

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
          className={styles.videoPlayer}
          controls={false}
          onTimeUpdate={handleTimeUpdate}
        />
      </div>
      <div className={styles.controls}>
        <div className={styles.playbackButtons}>
          <button className={styles.controlButton} onClick={prevVideo}>
            ⏮
          </button>
          <button className={styles.controlButton} onClick={handlePlayPause}>
            ▶
          </button>
          <button className={styles.controlButton} onClick={nextVideo}>
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
      </div>
    </div>
  );
};

export default Player;
