import Head from 'next/head';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Tackle.net - Fishing Tackle Network</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div>
        <h1 className='text-9xl font-bold'>Tackle Net</h1>
      </div>
    </div>
  );
}
