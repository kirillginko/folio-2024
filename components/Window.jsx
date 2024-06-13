import React, { useEffect, useState } from "react";
import styles from "../styles/Window.module.css";
import { gsap, Draggable } from "../gsap"; // Adjust the path as necessary

const Window = () => {
  const [activeItem, setActiveItem] = useState("wikipedia");

  useEffect(() => {
    if (typeof window !== "undefined") {
      Draggable.create(".draggable-window", {
        type: "x,y",
        edgeResistance: 0.65,
        bounds: "body",
        inertia: true,
      });
    }
  }, []);

  const sidebarItems = [
    { name: "Network" },
    { name: "Dual G4 Panther" },
    { name: "Stuff" },
    { name: "Desktop" },
    { name: "wikipedia" },
    { name: "Applications" },
    { name: "Documents" },
    { name: "Movies" },
    { name: "Music" },
    { name: "Pictures" },
  ];

  const folders = [
    {
      name: "Desktop",
      img: "https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224839/Folder_gqg2go.png",
    },
    {
      name: "Documents",
      img: "https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224839/Folder_gqg2go.png",
    },
    {
      name: "Library",
      img: "https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224839/Folder_gqg2go.png",
    },
    {
      name: "Movies",
      img: "https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224839/Folder_gqg2go.png",
    },
    {
      name: "Music",
      img: "https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224839/Folder_gqg2go.png",
    },
    {
      name: "Pictures",
      img: "https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224839/Folder_gqg2go.png",
    },
    {
      name: "Public",
      img: "https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224839/Folder_gqg2go.png",
    },
    {
      name: "Sites",
      img: "https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224839/Folder_gqg2go.png",
    },
  ];

  return (
    <div className={`${styles.window} draggable-window`}>
      <div className={styles["window-header"]}>
        <div className={styles.buttons}>
          <div className={`${styles.button} ${styles.close}`}></div>
          <div className={`${styles.button} ${styles.minimize}`}></div>
          <div className={`${styles.button} ${styles.maximize}`}></div>
        </div>
        <div className={styles.title}>wikipedia</div>
        <div></div>
      </div>
      <div style={{ display: "flex", height: "100%" }}>
        <div className={styles["window-sidebar"]}>
          <ul>
            {sidebarItems.map((item) => (
              <li
                key={item.name}
                className={item.name === activeItem ? styles.active : ""}
                onClick={() => setActiveItem(item.name)}
              >
                {item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["window-content"]}>
          {folders.map((folder) => (
            <div className={styles.folder} key={folder.name}>
              <img src={folder.img} alt={folder.name} />
              <span>{folder.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Window;
