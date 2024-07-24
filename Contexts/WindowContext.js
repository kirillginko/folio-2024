import React, { createContext, useState } from "react";

export const WindowContext = createContext();

export const WindowProvider = ({ children }) => {
  const [isFinderOpen, setIsFinderOpen] = useState(true);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isBrowserOpen, setIsBrowserOpen] = useState(false);
  const [isVideoPlayerOpen, setIsVideoPlayerOpen] = useState(false);
  const [isMusicPlayerOpen, setIsMusicPlayerOpen] = useState(false);
  const [videoCurrentTime, setVideoCurrentTime] = useState(0);

  const toggleFinder = () => {
    setIsFinderOpen((prevIsOpen) => !prevIsOpen);
  };

  const toggleAbout = () => {
    setIsAboutOpen((prevIsOpen) => !prevIsOpen);
  };

  const toggleBrowser = () => {
    setIsBrowserOpen((prevIsOpen) => !prevIsOpen);
  };

  const toggleVideoPlayer = () => {
    setIsVideoPlayerOpen((prevIsOpen) => !prevIsOpen);
  };

  const toggleMusicPlayer = () => {
    setIsMusicPlayerOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <WindowContext.Provider
      value={{
        isFinderOpen,
        toggleFinder,
        isAboutOpen,
        toggleAbout,
        toggleBrowser,
        videoCurrentTime,
        setVideoCurrentTime,
        toggleVideoPlayer,
        isVideoPlayerOpen,
        isBrowserOpen,
        isMusicPlayerOpen,
        toggleMusicPlayer,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};
