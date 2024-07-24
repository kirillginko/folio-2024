import React, { useEffect, useRef, useContext } from "react";
import styles from "../styles/Finder.module.css";
import { Draggable } from "../gsap";
import { WindowContext } from "../Contexts/WindowContext";
import { ZIndexContext } from "../Contexts/ZIndexContext";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClock,
  faDesktop,
  faDownload,
  faFolder,
  faGlobe,
  faHdd,
  faHome,
  faNetworkWired,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

const Finder = () => {
  const { isFinderOpen, toggleFinder } = useContext(WindowContext);
  const { bringToFront, getZIndex } = useContext(ZIndexContext);
  const draggableRef = useRef(null);
  const handleRef = useRef(null);

  useEffect(() => {
    if (isFinderOpen && typeof window !== "undefined") {
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
  }, [isFinderOpen, bringToFront]);

  if (!isFinderOpen) {
    return null;
  }

  const folderSrc =
    "https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224839/Folder_gqg2go.png";
  const sidebarItems = [
    { label: "Recents", icon: faClock },
    { label: "Applications", icon: faDesktop },
    { label: "Documents", icon: faFolder },
    { label: "Desktop", icon: faDesktop },
    { label: "Downloads", icon: faDownload },
    { label: "My Folder", icon: faUser },
    { label: "Creative Cloud Files", icon: faFolder },
    { label: "iCloud Drive", icon: faGlobe },
    { label: "Macintosh HD", icon: faHdd },
    { label: "Network", icon: faNetworkWired },
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
            onClick={toggleFinder}
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
            {sidebarItems.map((item, index) => (
              <li key={index} className={index === 1 ? styles.active : ""}>
                <FontAwesomeIcon icon={item.icon} className={styles.icon} />
                <span>{item.label}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className={styles["window-content"]}>
          {sidebarItems.map((item, index) => (
            <div className={styles.folder} key={index}>
              <Image src={folderSrc} alt={item.label} width={50} height={50} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Finder;
