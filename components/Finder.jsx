import React, { useEffect, useRef, useContext } from "react";
import styles from "../styles/Finder.module.css";
import { Draggable } from "../gsap";
import { WindowContext } from "../Contexts/WindowContext";
import { ZIndexContext } from "../Contexts/ZIndexContext";
import Image from "next/image";

const Window = () => {
  const { isWindowOpen, toggleWindow } = useContext(WindowContext);
  const { bringToFront, getZIndex } = useContext(ZIndexContext);
  const draggableRef = useRef(null);
  const handleRef = useRef(null);

  useEffect(() => {
    if (isWindowOpen && typeof window !== "undefined") {
      const draggableInstance = Draggable.create(draggableRef.current, {
        type: "x,y",
        edgeResistance: 0.65,
        bounds: "body",
        inertia: true,
        trigger: handleRef.current,
        onPress: () => bringToFront("finder"),
      });

      return () => {
        if (draggableInstance[0]) {
          draggableInstance[0].kill();
        }
      };
    }
  }, [isWindowOpen, bringToFront]);

  if (!isWindowOpen) {
    return null;
  }

  const folderImages = [
    {
      src: "https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224839/Folder_gqg2go.png",
      alt: "Projects",
      label: "Projects",
    },
    {
      src: "https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224839/Folder_gqg2go.png",
      alt: "Documents",
      label: "Documents",
    },
    {
      src: "https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224839/Folder_gqg2go.png",
      alt: "Library",
      label: "Library",
    },
    {
      src: "https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224839/Folder_gqg2go.png",
      alt: "Movies",
      label: "Movies",
    },
    {
      src: "https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224839/Folder_gqg2go.png",
      alt: "Music",
      label: "Music",
    },
    {
      src: "https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224839/Folder_gqg2go.png",
      alt: "Pictures",
      label: "Pictures",
    },
    {
      src: "https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224839/Folder_gqg2go.png",
      alt: "Public",
      label: "Public",
    },
    {
      src: "https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224839/Folder_gqg2go.png",
      alt: "Sites",
      label: "Sites",
    },
  ];

  return (
    <div
      ref={draggableRef}
      className={`${styles.window} draggable-window`}
      style={{ zIndex: getZIndex("finder") }}
      onClick={() => bringToFront("finder")}
    >
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
          {folderImages.map((folder, index) => (
            <div className={styles.folder} key={index}>
              <Image src={folder.src} alt={folder.alt} width={50} height={50} />
              <span>{folder.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Window;
