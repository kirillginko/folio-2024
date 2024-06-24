import React, { createContext, useState, useRef } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [isPlayerOpen, setIsPlayerOpen] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRef = useRef(null);

  const playlist = [
    "https://res.cloudinary.com/dtps5ugbf/video/upload/v1719172880/Star_Wars_Episode_I__The_Phantom_Menace_-_Trailer_qtvxds.mp4",
    "https://res.cloudinary.com/dtps5ugbf/video/upload/v1719188717/iPod_shuffle_ezwsmx.mp4",
    "https://res.cloudinary.com/dtps5ugbf/video/upload/v1719193256/Japanese_Commercial_Logos_of_the_1980_s_-_2000_s_PART_73_g6wc6b.mp4",
  ];

  const togglePlayer = () => {
    setIsPlayerOpen((prev) => {
      if (prev && videoRef.current) {
        // Save the current time when the player is closed
        setCurrentTime(videoRef.current.currentTime);
        videoRef.current.pause();
      } else if (videoRef.current) {
        // Set the current time when the player is reopened
        videoRef.current.currentTime = currentTime;
        videoRef.current.volume = 0.5; // Set the volume to 50%
      }
      return !prev;
    });
  };

  const nextVideo = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % playlist.length);
    setCurrentTime(0); // Reset currentTime for the next video
  };

  const prevVideo = () => {
    setCurrentVideoIndex(
      (prevIndex) => (prevIndex - 1 + playlist.length) % playlist.length
    );
    setCurrentTime(0); // Reset currentTime for the previous video
  };

  return (
    <PlayerContext.Provider
      value={{
        isPlayerOpen,
        togglePlayer,
        videoRef,
        currentTime,
        playlist,
        currentVideoIndex,
        nextVideo,
        prevVideo,
      }}
    >
      {children}
    </PlayerContext.Provider>
  );
};
