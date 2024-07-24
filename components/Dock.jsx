import React, { useState } from "react";
import Image from "next/image";
import styles from "../styles/Dock.module.css";
import { useContext } from "react";
import { WindowContext } from "../Contexts/WindowContext";
import { ZIndexContext } from "../Contexts/ZIndexContext";

function Dock() {
  const { toggleFinder, toggleBrowser, toggleMusicPlayer, toggleVideoPlayer } =
    useContext(WindowContext);
  const { bringToFront } = useContext(ZIndexContext);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleBounceClick = (event, toggleFunc, windowName) => {
    const imgElement = event.currentTarget;

    imgElement.classList.add(styles.bounce);
    setTimeout(() => {
      imgElement.classList.remove(styles.bounce);
      toggleFunc();
      bringToFront(windowName);
    }, 800);
  };

  const dockItems = [
    {
      name: "Finder",
      src: "https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224838/Finder_kmiknb.png",
      onClick: toggleFinder,
      windowName: "finder",
    },
    {
      name: "Applications",
      src: "https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224836/Applications_Folder_l8g5jy.png",
    },
    {
      name: "Calendar",
      src: "https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224839/iCal_tzwfww.png",
    },
    {
      name: "Web Browser",
      src: "https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224844/Safari_swdhre.png",
      onClick: toggleBrowser,
      windowName: "browser",
    },
    {
      name: "iTunes",
      src: "https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224841/iTunes_2_fmevlt.png",
      onClick: toggleMusicPlayer,
      windowName: "musicplayer",
    },
    {
      name: "iPhoto",
      src: "https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224840/iPhoto_g9ifyl.png",
    },
    {
      name: "Video Player",
      src: "https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224843/QuickTime_Player_xk7bhn.png",
      onClick: toggleVideoPlayer,
      windowName: "videoplayer",
    },
    {
      name: "Text Edit",
      src: "https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224845/TextEdit_gs86il.png",
    },
    {
      name: "System Settings",
      src: "https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224845/System_Prefrences_hjobyq.png",
    },
    {
      name: "Trash",
      src: "https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224845/Trash_empty_vepvhm.png",
    },
  ];

  return (
    <div className={styles.dockContainer}>
      <ul
        className={`${styles.dock} ${
          hoveredIndex !== null ? styles.dockHovered : ""
        }`}
      >
        {dockItems.map((item, index) => (
          <li
            key={item.name}
            className={`
              ${styles.dockItem}
              ${hoveredIndex === index ? styles.hovered : ""}
              ${
                hoveredIndex === index - 1 || hoveredIndex === index + 1
                  ? styles.second
                  : ""
              }
            `}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <span className={styles.itemName}>{item.name}</span>
            <a href="#">
              <Image
                src={item.src}
                alt={item.name}
                width={70}
                height={70}
                onClick={(event) =>
                  item.onClick &&
                  handleBounceClick(event, item.onClick, item.windowName)
                }
              />
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Dock;
