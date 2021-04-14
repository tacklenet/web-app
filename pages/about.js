import Layout from '@/components/Layout';
import Faq from '@/components/Faq';
import MetaTags from '@/components/MetaTags';

export default function About() {
  return (
    <>
      <MetaTags />
      <Faq />
    </>
  );
}

About.layout = Layout;
