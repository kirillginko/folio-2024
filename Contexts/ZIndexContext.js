import React, { createContext, useRef, useEffect } from "react";

export const ZIndexContext = createContext();

export const ZIndexProvider = ({ children }) => {
  const maxZIndex = useRef(1);
  const zIndices = useRef({});

  const initializeZIndices = () => {
    const windows = ["finder", "about", "musicplayer", "videoplayer"];
    windows.forEach((window, index) => {
      zIndices.current[window] = index + 1;
    });
    maxZIndex.current = windows.length;
  };

  useEffect(() => {
    initializeZIndices();
  }, []);

  const bringToFront = (windowName) => {
    maxZIndex.current += 1;
    zIndices.current[windowName] = maxZIndex.current;
    // Directly update style instead of causing a re-render
    const windowElement = document.getElementById(windowName);
    if (windowElement) {
      windowElement.style.zIndex = maxZIndex.current;
    }
  };

  const getZIndex = (windowName) => {
    return zIndices.current[windowName] || 0;
  };

  return (
    <ZIndexContext.Provider value={{ bringToFront, getZIndex }}>
      {children}
    </ZIndexContext.Provider>
  );
};
