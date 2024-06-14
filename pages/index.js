import Head from "next/head";
import styles from "../styles/Home.module.css";
import Dock from "../components/Dock";
import TopNav from "../components/TopNav";
import Window from "../components/Window";
import About from "../components/About";

export default function Home() {
  return (
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
        <Dock />
      </main>
    </div>
  );
}
