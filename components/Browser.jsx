import React, { useEffect, useRef, useContext } from "react";
import Image from "next/image";
import styles from "../styles/Browser.module.css";
import { Draggable } from "../gsap";
import { WindowContext } from "../Contexts/WindowContext";
import { ZIndexContext } from "../Contexts/ZIndexContext";

const Browser = ({ children, title }) => {
  const { isBrowserOpen, toggleBrowser } = useContext(WindowContext);
  const { bringToFront, getZIndex } = useContext(ZIndexContext);
  const draggableRef = useRef(null);
  const handleRef = useRef(null);

  useEffect(() => {
    if (isBrowserOpen && typeof window !== "undefined") {
      const draggableInstance = Draggable.create(draggableRef.current, {
        type: "x,y",
        edgeResistance: 0.65,
        bounds: "body",
        inertia: true,
        trigger: handleRef.current,
        onPress: () => bringToFront("browser"),
      });

      return () => {
        if (draggableInstance[0]) {
          draggableInstance[0].kill();
        }
      };
    }
  }, [isBrowserOpen, bringToFront]);

  if (!isBrowserOpen) {
    return null;
  }

  return (
    <div
      ref={draggableRef}
      className={`${styles.browserWindow} draggable-window`}
      style={{ zIndex: getZIndex("browser") }}
      onClick={() => bringToFront("browser")}
    >
      <div className={styles.titleBar} ref={handleRef}>
        <div className={styles.buttons}>
          <div className={styles.close} onClick={toggleBrowser}></div>
          <div className={styles.minimize}></div>
          <div className={styles.zoom}></div>
        </div>
        <div className={styles.title}>{title}</div>
      </div>
      <div className={styles.addressBar}>
        <div className={styles.addressBarContent}>
          <div className={styles.navigationButtons}>
            <div className={styles.navButton}></div>
            <div className={styles.navButton}></div>
          </div>
          <input type="text" placeholder="Search Google or enter an address" />
          <div className={styles.readerButton}>Reader</div>
        </div>
      </div>
      <div className={styles.toolbar}>
        <div>Apple</div>
        <div>iCloud</div>
        <div>Facebook</div>
        <div>Twitter</div>
        <div>Wikipedia</div>
        <div>Yahoo!</div>
        <div>News</div>
        <div>Popular</div>
      </div>
      <div className={styles.content}>
        <Image
          src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1720586533/Screenshot_2024-07-10_at_00.42.03_vd6zuh.png"
          width={800}
          height={800}
          alt="content"
        />
        {children}
      </div>
    </div>
  );
};

export default Browser;
