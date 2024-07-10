import React, { useState, useEffect, useContext, useRef } from "react";
import styles from "../styles/VideoPlayer.module.css";
import { Draggable } from "../gsap";
import { WindowContext } from "../Contexts/WindowContext";
import { ZIndexContext } from "../Contexts/ZIndexContext";

const VideoPlayer = () => {
  const { isVideoPlayerOpen, toggleVideoPlayer } = useContext(WindowContext);
  const { bringToFront, getZIndex } = useContext(ZIndexContext);
  const containerRef = useRef(null);
  const handleRef = useRef(null);
  const progressBarRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (isVideoPlayerOpen && typeof window !== "undefined") {
      const draggableInstance = Draggable.create(containerRef.current, {
        type: "x,y",
        edgeResistance: 0.65,
        bounds: "body",
        inertia: true,
        trigger: handleRef.current,
        onPress: () => bringToFront("videoplayer"),
      });

      return () => {
        if (draggableInstance[0]) {
          draggableInstance[0].kill();
        }
      };
    }
  }, [isVideoPlayerOpen, bringToFront]);

  if (!isVideoPlayerOpen) {
    return null;
  }

  return (
    <div
      className={styles.quickTimeContainer}
      ref={containerRef}
      style={{ zIndex: getZIndex("videoplayer") }}
      onClick={() => {
        bringToFront("videoplayer");
      }}
    >
      <div className={styles.windowHeader} ref={handleRef}>
        <div className={styles.buttons}>
          <div className={styles.close} onClick={toggleVideoPlayer}></div>
          <div className={styles.minimize}></div>
          <div className={styles.zoom}></div>
        </div>
        <span className={styles.windowTitle}></span>
      </div>
      <div className={styles.videoContainer}>
        <video className={styles.videoPlayer} controls={false} />
      </div>
      <div className={styles.controls}>
        <div className={styles.playbackButtons}>
          <button className={styles.controlButton}>⏮</button>
          <button className={styles.controlButton}>▶</button>
          <button className={styles.controlButton}>⏭</button>
        </div>
        <div className={styles.progressBar} ref={progressBarRef}>
          <div
            className={styles.progress}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default VideoPlayer;
