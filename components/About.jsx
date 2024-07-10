import React, { useEffect, useRef, useContext } from "react";
import styles from "../styles/About.module.css";
import { Draggable } from "../gsap";
import AppleIcon from "@mui/icons-material/Apple";
import { WindowContext } from "../Contexts/WindowContext";
import { ZIndexContext } from "../Contexts/ZIndexContext";

const About = () => {
  const { isAboutOpen, toggleAbout } = useContext(WindowContext);
  const { bringToFront, getZIndex } = useContext(ZIndexContext);
  const draggableRef = useRef(null);
  const handleRef = useRef(null);

  useEffect(() => {
    if (isAboutOpen && typeof window !== "undefined") {
      const draggableInstance = Draggable.create(draggableRef.current, {
        type: "x,y",
        edgeResistance: 0.65,
        bounds: "body",
        inertia: true,
        trigger: handleRef.current,
        onPress: () => bringToFront("about"),
      });

      return () => {
        if (draggableInstance[0]) {
          draggableInstance[0].kill();
        }
      };
    }
  }, [isAboutOpen, bringToFront]);

  if (!isAboutOpen) {
    return null;
  }

  return (
    <div
      ref={draggableRef}
      className={`${styles.container} draggable-window`}
      style={{ zIndex: getZIndex("about") }}
      onClick={() => bringToFront("about")}
    >
      <div ref={handleRef} className={`${styles.navbar}`}>
        <div className={styles.navButtons}>
          <div className={styles.redButton} onClick={toggleAbout}></div>
          <div className={styles.yellowButton}></div>
          <div className={styles.greenButton}></div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.header}>
          <AppleIcon className={`${styles.option} ${styles.logo}`} />
          <h1>Mac OS X</h1>
          <p>Version 10.3.9</p>
        </div>
        <div className={styles.body}>
          <button className={`${styles.button} ${styles.primary}`}>
            Software Update...
          </button>
          <div className={styles.info}>
            <p>
              <strong>Processor:</strong> 2 GHz PowerPC G3
            </p>
            <p>
              <strong>Memory:</strong> 256 MB
            </p>
          </div>
          <button className={`${styles.button} ${styles.secondary}`}>
            More Info...
          </button>
        </div>
        <div className={styles.footer}>
          <p>TM & © Apple Computer, Inc. 1983-2004</p>
          <p>All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
