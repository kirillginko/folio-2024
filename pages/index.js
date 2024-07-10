import Head from "next/head";
import styles from "../styles/Home.module.css";
import { PlayerProvider } from "../Contexts/PlayerContext";
import { WindowProvider } from "../Contexts/WindowContext";
import { ZIndexProvider } from "../Contexts/ZIndexContext";
import Dock from "../components/Dock";
import TopNav from "../components/TopNav";
import Finder from "../components/Finder";
import About from "../components/About";
import Player from "../components/Player";
import MusicPlayer from "../components/MusicPlayer";
import Browser from "../components/Browser";

export default function Home() {
  return (
    <ZIndexProvider>
      <WindowProvider>
        <div className={styles.container}>
          <Head>
            <title>Kirill Ginko | Creative Designer</title>
            <meta name="description" content="Full Stack Web Developer" />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <TopNav />
          <main className={styles.main}>
            <Finder windowName="finder" />
            <Browser
              title="Safari"
              windowName="browser"
              src="https://www.surfer.com/"
            />
            <About windowName="about" />
            <MusicPlayer windowName="musicplayer" />
            <PlayerProvider>
              <Player windowName="videoplayer" />
              <Dock />
            </PlayerProvider>
          </main>
        </div>
      </WindowProvider>
    </ZIndexProvider>
  );
}
