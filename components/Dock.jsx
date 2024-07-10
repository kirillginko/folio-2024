import React, { useContext } from "react";
import Image from "next/image";
import styles from "../styles/Dock.module.css";
import { PlayerContext } from "../Contexts/PlayerContext";
import { WindowContext } from "../Contexts/WindowContext";
import { ZIndexContext } from "../Contexts/ZIndexContext";

function Dock() {
  const { toggleWindow, toggleBrowser, toggleMusicPlayer, toggleVideoPlayer } =
    useContext(WindowContext);
  const { bringToFront } = useContext(ZIndexContext);

  const handleBounceClick = (event, toggleFunc, windowName) => {
    const imgElement = event.currentTarget;

    imgElement.classList.add(styles.bounce);
    setTimeout(() => {
      imgElement.classList.remove(styles.bounce);
      toggleFunc();
      bringToFront(windowName); // Bring the corresponding window to front
    }, 800); // Match the duration of the bounce animation
  };

  return (
    <div className={styles.container}>
      <div id="dock" className={styles.dock}>
        <ul>
          <li className={styles.dockItem}>
            <span>Finder</span>
            <a href="#">
              <Image
                src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224838/Finder_kmiknb.png"
                alt="Finder"
                width={40}
                height={40}
                onClick={(event) =>
                  handleBounceClick(event, toggleWindow, "finder")
                }
              />
            </a>
          </li>
          <li className={styles.dockItem}>
            <span>Applications</span>
            <a href="#">
              <Image
                src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224836/Applications_Folder_l8g5jy.png"
                alt="Applications"
                width={40}
                height={40}
              />
            </a>
          </li>
          <li className={styles.dockItem}>
            <span>Calendar</span>
            <a href="#">
              <Image
                src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224839/iCal_tzwfww.png"
                alt="Calendar"
                width={40}
                height={40}
              />
            </a>
          </li>
          <li className={styles.dockItem}>
            <span>Web Browser</span>
            <a href="#">
              <Image
                src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224844/Safari_swdhre.png"
                alt="Chrome"
                width={40}
                height={40}
                onClick={(event) =>
                  handleBounceClick(event, toggleBrowser, "browser")
                }
              />
            </a>
          </li>
          <li className={styles.dockItem}>
            <span>iTunes</span>
            <a href="#">
              <Image
                src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224841/iTunes_2_fmevlt.png"
                alt="iTunes"
                width={40}
                height={40}
                onClick={(event) =>
                  handleBounceClick(event, toggleMusicPlayer, "musicplayer")
                }
              />
            </a>
          </li>
          <li className={styles.dockItem}>
            <span>iPhoto</span>
            <a href="#">
              <Image
                src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224840/iPhoto_g9ifyl.png"
                alt="Photoshop"
                width={40}
                height={40}
              />
            </a>
          </li>
          <li className={styles.dockItem}>
            <span>Video Player</span>
            <a href="#">
              <Image
                src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224843/QuickTime_Player_xk7bhn.png"
                alt="Premiere"
                width={40}
                height={40}
                onClick={(event) =>
                  handleBounceClick(event, toggleVideoPlayer, "videoplayer")
                }
              />
            </a>
          </li>
          <li className={styles.dockItem}>
            <span>Text Edit</span>
            <a href="#">
              <Image
                src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224845/TextEdit_gs86il.png"
                alt="Text Edit"
                width={40}
                height={40}
              />
            </a>
          </li>
          <li className={styles.dockItem}>
            <span>System Settings</span>
            <a href="#">
              <Image
                src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224845/System_Prefrences_hjobyq.png"
                alt="System Preferences"
                width={40}
                height={40}
              />
            </a>
          </li>
          <li className={styles.divider}></li>
          <li className={styles.dockItem}>
            <span>Trash</span>
            <a href="#">
              <Image
                src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224845/Trash_empty_vepvhm.png"
                alt="Trash Can"
                width={40}
                height={40}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dock;
