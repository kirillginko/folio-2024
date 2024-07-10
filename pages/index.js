import Head from "next/head";
import styles from "../styles/Home.module.css";
import { WindowProvider } from "../Contexts/WindowContext";
import { ZIndexProvider } from "../Contexts/ZIndexContext";
import Dock from "../components/Dock";
import TopNav from "../components/TopNav";
import Finder from "../components/Finder";
import About from "../components/About";
import VideoPlayer from "../components/VideoPlayer";
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
            <Browser title="Safari" windowName="browser" />
            <About windowName="about" />
            <MusicPlayer windowName="musicplayer" />
            <VideoPlayer windowName="videoplayer" />
            <Dock />
          </main>
        </div>
      </WindowProvider>
    </ZIndexProvider>
  );
}
