import React, { useEffect, useRef, useContext } from "react";
import styles from "../styles/Window.module.css";
import { Draggable } from "../gsap"; // Adjust the path as necessary
import { WindowContext } from "../WindowContext"; // Ensure the import path is correct

const Window = () => {
  const { isWindowOpen, toggleWindow } = useContext(WindowContext);
  const draggableRef = useRef(null);
  const handleRef = useRef(null);

  useEffect(() => {
    if (isWindowOpen && typeof window !== "undefined") {
      const draggableInstance = Draggable.create(draggableRef.current, {
        type: "x,y",
        edgeResistance: 0.65,
        bounds: "body",
        inertia: true,
        trigger: handleRef.current, // Set the handle to the navbar
      });

      return () => {
        if (draggableInstance[0]) {
          draggableInstance[0].kill();
        }
      };
    }
  }, [isWindowOpen]);

  if (!isWindowOpen) {
    return null;
  }

  return (
    <div ref={draggableRef} className={`${styles.window} draggable-window`}>
      <div ref={handleRef} className={styles["window-header"]}>
        <div className={styles.buttons}>
          <div
            className={`${styles.button} ${styles.close}`}
            onClick={toggleWindow}
          ></div>
          <div className={`${styles.button} ${styles.minimize}`}></div>
          <div className={`${styles.button} ${styles.maximize}`}></div>
        </div>
        <div className={styles.title}>Finder</div>
        <div></div>
      </div>
      <div style={{ display: "flex", height: "100%" }}>
        <div className={styles["window-sidebar"]}>
          <ul>
            <li className={styles.active}>Network</li>
            <li>Dual G4 Panther</li>
            <li>Stuff</li>
            <li>Desktop</li>
            <li>wikipedia</li>
            <li>Applications</li>
            <li>Documents</li>
            <li>Movies</li>
            <li>Music</li>
            <li>Pictures</li>
          </ul>
        </div>
        <div className={styles["window-content"]}>
          <div className={styles.folder}>
            <img
              src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224839/Folder_gqg2go.png"
              alt="Projects"
            />
            <span>Projects</span>
          </div>
          <div className={styles.folder}>
            <img
              src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224839/Folder_gqg2go.png"
              alt="Documents"
            />
            <span>Documents</span>
          </div>
          <div className={styles.folder}>
            <img
              src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224839/Folder_gqg2go.png"
              alt="Library"
            />
            <span>Library</span>
          </div>
          <div className={styles.folder}>
            <img
              src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224839/Folder_gqg2go.png"
              alt="Movies"
            />
            <span>Movies</span>
          </div>
          <div className={styles.folder}>
            <img
              src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224839/Folder_gqg2go.png"
              alt="Music"
            />
            <span>Music</span>
          </div>
          <div className={styles.folder}>
            <img
              src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224839/Folder_gqg2go.png"
              alt="Pictures"
            />
            <span>Pictures</span>
          </div>
          <div className={styles.folder}>
            <img
              src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224839/Folder_gqg2go.png"
              alt="Public"
            />
            <span>Public</span>
          </div>
          <div className={styles.folder}>
            <img
              src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224839/Folder_gqg2go.png"
              alt="Sites"
            />
            <span>Sites</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Window;
