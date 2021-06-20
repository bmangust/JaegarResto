import Head from 'next/head';
import Sidebar from '../components/Sidebar/Sidebar';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jaegar Resto</title>
        <meta name="description" content="Jaegar Resto website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Sidebar />
      <section className={styles.main}></section>
    </div>
  );
}
