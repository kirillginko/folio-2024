import React, { useEffect, useRef, useContext } from "react";
import styles from "../styles/Window.module.css";
import { Draggable } from "../gsap"; // Adjust the path as necessary
import { WindowContext } from "../WindowContext"; // Ensure the import path is correct
import Image from "next/image"; // Import Next.js Image component

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
