import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  useCallback,
} from "react";
import styles from "../styles/VideoPlayer.module.css";
import { Draggable } from "../gsap";
import { WindowContext } from "../Contexts/WindowContext";
import { ZIndexContext } from "../Contexts/ZIndexContext";
import { videoPlaylist } from "../data/videoplaylist";

const VideoPlayer = () => {
  const {
    isVideoPlayerOpen,
    toggleVideoPlayer,
    videoCurrentTime,
    setVideoCurrentTime,
  } = useContext(WindowContext);
  const { bringToFront, getZIndex } = useContext(ZIndexContext);
  const containerRef = useRef(null);
  const handleRef = useRef(null);
  const videoRef = useRef(null);
  const progressBarRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [videoState, setVideoState] = useState("initial");

  const loadVideo = useCallback(
    (autoplay = false) => {
      if (videoRef.current) {
        setVideoState("loading");
        setIsLoading(true);
        videoRef.current.src = videoPlaylist[currentVideoIndex];
        videoRef.current.load();
        videoRef.current.onloadeddata = () => {
          setIsLoading(false);
          setVideoState("ready");
          if (autoplay) {
            videoRef.current
              .play()
              .then(() => {
                setVideoState("playing");
              })
              .catch((error) => {
                console.error("Autoplay failed:", error);
                setVideoState("error");
              });
          }
        };
      }
    },
    [currentVideoIndex]
  );

  const handleNext = useCallback(() => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === videoPlaylist.length - 1 ? 0 : prevIndex + 1
    );
    setVideoCurrentTime(0);
    loadVideo(true);
  }, [loadVideo, setVideoCurrentTime]);

  const handlePrevious = useCallback(() => {
    setCurrentVideoIndex((prevIndex) =>
      prevIndex === 0 ? videoPlaylist.length - 1 : prevIndex - 1
    );
    setVideoCurrentTime(0);
    loadVideo(true);
  }, [loadVideo, setVideoCurrentTime]);

  useEffect(() => {
    if (isVideoPlayerOpen) {
      loadVideo(false);
    } else {
      setVideoState("initial");
    }
  }, [isVideoPlayerOpen, loadVideo]);

  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      const handleLoadedMetadata = () => {
        setIsLoading(false);
        setVideoState("ready");
        videoElement.currentTime = videoCurrentTime;
        if (videoState === "playing") {
          videoElement.play().catch((error) => {
            console.error("Play failed:", error);
            setVideoState("error");
          });
        }
      };

      const handlePlay = () => setVideoState("playing");
      const handlePause = () => setVideoState("paused");
      const handleEnded = () => {
        handleNext();
      };
      const handleError = (e) => {
        console.error("Video error:", e);
        setVideoState("error");
        setIsLoading(false);
      };

      videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);
      videoElement.addEventListener("play", handlePlay);
      videoElement.addEventListener("pause", handlePause);
      videoElement.addEventListener("ended", handleEnded);
      videoElement.addEventListener("error", handleError);

      return () => {
        videoElement.removeEventListener(
          "loadedmetadata",
          handleLoadedMetadata
        );
        videoElement.removeEventListener("play", handlePlay);
        videoElement.removeEventListener("pause", handlePause);
        videoElement.removeEventListener("ended", handleEnded);
        videoElement.removeEventListener("error", handleError);
      };
    }
  }, [videoState, videoCurrentTime, handleNext]);

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

  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentTime = videoRef.current.currentTime;
      const duration = videoRef.current.duration;
      const progressPercentage = (currentTime / duration) * 100;
      setProgress(progressPercentage);
      setVideoCurrentTime(currentTime);
    }
  };

  const handleProgressClick = (e) => {
    const progressBar = progressBarRef.current;
    if (progressBar && videoRef.current) {
      const rect = progressBar.getBoundingClientRect();
      const clickPosition = e.clientX - rect.left;
      const clickRatio = clickPosition / rect.width;
      videoRef.current.currentTime = clickRatio * videoRef.current.duration;
    }
  };

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (videoState === "playing") {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch((error) => {
          console.error("Play failed:", error);
          setVideoState("error");
        });
      }
    }
  };

  const handleClose = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
    setVideoState("initial");
    toggleVideoPlayer();
  };

  if (!isVideoPlayerOpen) {
    return null;
  }

  return (
    <div
      ref={containerRef}
      className={styles.quickTimeContainer}
      style={{ zIndex: getZIndex("videoplayer") }}
      onClick={() => bringToFront("videoplayer")}
    >
      <div className={styles.windowHeader} ref={handleRef}>
        <div className={styles.buttons}>
          <div className={styles.close} onClick={handleClose}></div>
          <div className={styles.minimize}></div>
          <div className={styles.zoom}></div>
        </div>
        <span className={styles.windowTitle}>Video Player</span>
      </div>
      <div className={styles.videoContainer}>
        {isLoading && <div className={styles.loader}></div>}
        <video
          ref={videoRef}
          className={styles.videoPlayer}
          onTimeUpdate={handleTimeUpdate}
          style={{ display: isLoading ? "none" : "block" }}
        />
      </div>
      <div className={styles.controls}>
        <div className={styles.playbackButtons}>
          <button className={styles.controlButton} onClick={handlePrevious}>
            ⏮
          </button>
          <button className={styles.controlButton} onClick={handlePlayPause}>
            {videoState === "playing" ? "⏸" : "▶"}
          </button>
          <button className={styles.controlButton} onClick={handleNext}>
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

export default VideoPlayer;
