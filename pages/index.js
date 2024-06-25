import Head from "next/head";
import styles from "../styles/Home.module.css";
import { PlayerProvider } from "../PlayerContext";
import { WindowProvider } from "../WindowContext";
import Dock from "../components/Dock";
import TopNav from "../components/TopNav";
import Window from "../components/Window";
import About from "../components/About";
import Player from "../components/Player";
import MusicPlayer from "../components/MusicPlayer";

export default function Home() {
  return (
    <WindowProvider>
      <div className={styles.container}>
        <Head>
          <title>Kirill Ginko | Creative Designer</title>
          <meta name="description" content="Full Stack Web Developer" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <TopNav />
        <main className={styles.main}>
          <Window />
          <About />
          <MusicPlayer />
          <PlayerProvider>
            <Player />
            <Dock />
          </PlayerProvider>
        </main>
      </div>
    </WindowProvider>
  );
}
