import React, { useEffect, useRef, useContext } from "react";
import styles from "../styles/MusicPlayer.module.css";
import { Draggable } from "../gsap";
import { WindowContext } from "../WindowContext";

const MusicPlayer = () => {
  const { isMusicPlayerOpen, toggleMusicPlayer } = useContext(WindowContext);
  const draggableRef = useRef(null);
  const handleRef = useRef(null);

  useEffect(() => {
    if (isMusicPlayerOpen && typeof window !== "undefined") {
      const draggableInstance = Draggable.create(draggableRef.current, {
        type: "x,y",
        edgeResistance: 0.65,
        bounds: "body",
        inertia: true,
        trigger: handleRef.current,
      });

      return () => {
        if (draggableInstance[0]) {
          draggableInstance[0].kill();
        }
      };
    }
  }, [isMusicPlayerOpen]);

  if (!isMusicPlayerOpen) {
    return null;
  }

  return (
    <div ref={draggableRef} className={`${styles.window} draggable-window`}>
      <header ref={handleRef} className={styles.windowHeader}>
        <div className={styles.windowButtons}>
          <span className={styles.redButton} onClick={toggleMusicPlayer}></span>
          <span className={styles.yellowButton}></span>
          <span className={styles.greenButton}></span>
        </div>
        <div className={styles.headerControls}>
          <div className={styles.playbackControls}>
            <div className={styles.prev}>
              <i className="fa fa-backward"></i>
            </div>
            <div className={styles.pause}>
              <i className="fa fa-pause"></i>
            </div>
            <div className={styles.play}>
              <i className="fa fa-play"></i>
            </div>
            <div className={styles.next}>
              <i className="fa fa-forward"></i>
            </div>
            <input type="range" className={styles.volume} />
          </div>
          <div className={styles.centerPanel}>
            <div className={styles.column}>
              <strong className={styles.title}>
                Alive (Pegboard Nerds Remix)
              </strong>
              <small className={styles.info}>Krewella</small>
            </div>
          </div>
          <div className={styles.right}>
            <input
              type="search"
              className={styles.search}
              placeholder="Mediathek"
            />
            <div className={styles.downloads}></div>
          </div>
        </div>
      </header>
      <div className={styles.mainContent}>
        <aside className={styles.sidebar}>
          <ul className={styles.menu}>
            <li className={styles.menuItem}>Library</li>
            <ul className={styles.subMenu}>
              <li className={styles.subMenuItem}>Music</li>
              <li className={styles.subMenuItem}>Movies</li>
              <li className={styles.subMenuItem}>TV Shows</li>
              <li className={styles.subMenuItem}>Podcasts</li>
              <li className={styles.subMenuItem}>Audiobooks</li>
            </ul>
            <li className={styles.menuItem}>Store</li>
            <ul className={styles.subMenu}>
              <li className={styles.subMenuItem}>iTunes Store</li>
              <li className={styles.subMenuItem}>Shopping Cart</li>
              <li className={styles.subMenuItem}>Purchased</li>
              <li className={styles.subMenuItem}>Downloads</li>
            </ul>
            <li className={styles.menuItem}>Playlists</li>
            <ul className={styles.subMenu}>
              <li className={styles.subMenuItem}>Party Shuffle</li>
              <li className={styles.subMenuItem}>Library</li>
              <li className={styles.subMenuItem}>Music Videos</li>
              <li className={styles.subMenuItem}>My Top Rated</li>
              <li className={styles.subMenuItem}>Recently Played</li>
              <li className={styles.subMenuItem}>All But</li>
            </ul>
          </ul>
        </aside>
        <section className={styles.content}>
          <table className={styles.table}>
            <thead className={styles.tableHead}>
              <tr className={styles.tableRow}>
                <th className={styles.tableHeader}>Podcast</th>
                <th className={styles.tableHeader}>Time</th>
                <th className={styles.tableHeader}>Release Date</th>
                <th className={styles.tableHeader}>Description</th>
              </tr>
            </thead>
            <tbody className={styles.tableBody}>
              <tr className={styles.tableRow}>
                <td className={styles.tableData}>
                  FamilyLife Today with Dennis Ra...
                </td>
                <td className={styles.tableData}>23:13</td>
                <td className={styles.tableData}>6/11/07</td>
                <td className={styles.tableData}>
                  FamilyLife Today provides practi...
                </td>
              </tr>
              <tr className={styles.tableRow}>
                <td className={styles.tableData}>Macworld Keynote Address</td>
                <td className={styles.tableData}>1:45:35</td>
                <td className={styles.tableData}>1/9/07</td>
                <td className={styles.tableData}>
                  Watch Apple CEO Steve Jobs kick off the...
                </td>
              </tr>
              <tr className={styles.tableRow}>
                <td className={styles.tableData}>
                  MyMac Podcast 120 Apple Store Event
                </td>
                <td className={styles.tableData}>44:18</td>
                <td className={styles.tableData}>3/11/07</td>
                <td className={styles.tableData}>
                  The latest in MacIntosh Talk podcast
                </td>
              </tr>
              <tr className={styles.tableRow}>
                <td className={styles.tableData}>RetroMacCast</td>
                <td className={styles.tableData}>1:29</td>
                <td className={styles.tableData}>8/19/07</td>
                <td className={styles.tableData}>
                  Where great old Macs live again!
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
      <footer className={styles.footer}>
        <button className={styles.footerButton}>Unsubscribe</button>
        <button className={styles.footerButton}>Settings...</button>
        <div className={styles.footerRight}>
          <button className={styles.footerButton}>Podcast Directory</button>
          <button className={styles.footerButton}>Refresh</button>
        </div>
      </footer>
    </div>
  );
};

export default MusicPlayer;
