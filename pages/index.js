import Head from 'next/head';
import Layout from '../components/Layout';
import HeroCard from '../components/HeroCard';
import Faq from '../components/Faq';

export default function Home() {
  return (
    <>
      <Head>
        <title>Tackle.net - Fishing Tackle Network</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <Layout>
        <HeroCard />
        <Faq />
      </Layout>
    </>
  );
}
