import React, { useEffect } from "react";
import styles from "../styles/About.module.css";
import { Draggable } from "../gsap";
import AppleIcon from "@mui/icons-material/Apple";
const About = () => {
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

  return (
    <div className={`${styles.container} draggable-window`}>
      <div className={styles.navbar}>
        <div className={styles.navButtons}>
          <div className={styles.redButton}></div>
          <div className={styles.yellowButton}></div>
          <div className={styles.greenButton}></div>
        </div>
        {/* <div className={styles.navTitle}>About This Mac</div> */}
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
