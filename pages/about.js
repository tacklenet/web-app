import Layout from '../components/Layout';
import HeroCard from '../components/HeroCard';
import Faq from '../components/Faq';
import MetaTags from '../components/MetaTags';

export default function About() {
  return (
    <>
      <MetaTags />
      <Faq />
    </>
  );
}

About.layout = Layout;
