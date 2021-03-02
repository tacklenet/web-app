import Head from 'next/head';

export default function Metatags({
  title = 'Tackle.net',
  description = 'Handmade bass fishing lures made by local bait makers',
  image = '/main.png',
}) {
  return (
    <Head>
      <title>{title}</title>
      <link rel='icon' href='/favicon.ico' />
      <meta name='twitter:card' content='summary' />
      <meta name='twitter:site' content='@tacklenet' />
      <meta name='twitter:title' content={title} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={image} />

      <meta property='og:title' content={title} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={image} />
    </Head>
  );
}
