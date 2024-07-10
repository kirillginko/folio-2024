import React, { createContext, useState } from "react";

export const WindowContext = createContext();

export const WindowProvider = ({ children }) => {
  const [isWindowOpen, setIsWindowOpen] = useState(true);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isBrowserOpen, setIsBrowserOpen] = useState(true);
  // const [isPlayerOpen, setIsPlayerOpen] = useState(false);
  const [isMusicPlayerOpen, setIsMusicPlayerOpen] = useState(false);

  const toggleWindow = () => {
    setIsWindowOpen((prevIsOpen) => !prevIsOpen);
  };

  const toggleAbout = () => {
    setIsAboutOpen((prevIsOpen) => !prevIsOpen);
  };

  const toggleBrowser = () => {
    setIsBrowserOpen((prevIsOpen) => !prevIsOpen);
  };

  // const togglePlayer = () => {
  //   setIsPlayerOpen((prevIsOpen) => !prevIsOpen);
  // };
  const toggleMusicPlayer = () => {
    setIsMusicPlayerOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <WindowContext.Provider
      value={{
        isWindowOpen,
        toggleWindow,
        isAboutOpen,
        toggleAbout,
        toggleBrowser,
        isBrowserOpen,
        isMusicPlayerOpen,
        toggleMusicPlayer,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};
