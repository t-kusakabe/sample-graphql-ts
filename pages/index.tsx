import type { NextPage } from 'next';
import Head from 'next/head';
// import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Sample GraphQL</title>
        <meta name="description" content="Sample GraphQL" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Hello World!</h1>
      </main>
    </div>
  )
};

export default Home;
