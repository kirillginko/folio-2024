import React, { createContext, useState } from "react";

export const WindowContext = createContext();

export const WindowProvider = ({ children }) => {
  const [isWindowOpen, setIsWindowOpen] = useState(true);
  const [isAboutOpen, setIsAboutOpen] = useState(true);
  const [isPlayerOpen, setIsPlayerOpen] = useState(true);

  const toggleWindow = () => {
    setIsWindowOpen((prevIsOpen) => !prevIsOpen);
  };

  const toggleAbout = () => {
    setIsAboutOpen((prevIsOpen) => !prevIsOpen);
  };

  const togglePlayer = () => {
    setIsPlayerOpen((prevIsOpen) => !prevIsOpen);
  };

  return (
    <WindowContext.Provider
      value={{
        isWindowOpen,
        toggleWindow,
        isAboutOpen,
        toggleAbout,
        isPlayerOpen,
        togglePlayer,
      }}
    >
      {children}
    </WindowContext.Provider>
  );
};
