import Image from "next/image";
import styles from "../styles/Dock.module.css";

function Dock() {
  return (
    <div className={styles.container}>
      <div id="dock" className={styles.dock}>
        <ul>
          <li className={styles.dockItem}>
            <span>Finder</span>
            <a href="#one">
              <Image
                src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224838/Finder_kmiknb.png"
                alt="Finder"
                width={50}
                height={50}
              />
            </a>
          </li>
          <li className={styles.dockItem}>
            <span>Applications</span>
            <a href="#">
              <Image
                src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224836/Applications_Folder_l8g5jy.png"
                alt="Applications"
                width={50}
                height={50}
              />
            </a>
          </li>
          <li className={styles.dockItem}>
            <span>Calendar</span>
            <a href="#">
              <Image
                src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224839/iCal_tzwfww.png"
                alt="Calendar"
                width={50}
                height={50}
              />
            </a>
          </li>
          <li className={styles.dockItem}>
            <span>Web Browser</span>
            <a href="#">
              <Image
                src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224840/Internet_Explorer_t9xkdj.png"
                alt="Chrome"
                width={50}
                height={50}
              />
            </a>
          </li>
          <li className={styles.dockItem}>
            <span>iTunes</span>
            <a href="#">
              <Image
                src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224841/iTunes_2_fmevlt.png"
                alt="iTunes"
                width={50}
                height={50}
              />
            </a>
          </li>
          <li className={styles.dockItem}>
            <span>Photoshop</span>
            <a href="#ps-one">
              <Image
                src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224843/Preview_smriqk.png"
                alt="Photoshop"
                width={50}
                height={50}
              />
            </a>
          </li>
          <li className={styles.dockItem}>
            <span>Premiere</span>
            <a href="#">
              <Image
                src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224840/iMovie_HD_idbldj.png"
                alt="Premiere"
                width={50}
                height={50}
              />
            </a>
          </li>
          <li className={styles.dockItem}>
            <span>Text Edit</span>
            <a href="#">
              <Image
                src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224845/TextEdit_gs86il.png"
                alt="Text Edit"
                width={50}
                height={50}
              />
            </a>
          </li>
          <li className={styles.dockItem}>
            <span>Trash Can</span>
            <a href="#">
              <Image
                src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224845/System_Prefrences_hjobyq.png"
                alt="System Preferences"
                width={50}
                height={50}
              />
            </a>
          </li>
          <li className={styles.dockItem}>
            <span>System Preferences</span>
            <a href="#">
              <Image
                src="https://res.cloudinary.com/dtps5ugbf/image/upload/v1718224845/Trash_empty_vepvhm.png"
                alt="Trash Can"
                width={50}
                height={50}
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Dock;
