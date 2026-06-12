import { NewHero } from '../components/NewHero';
import { HomeIntro } from '../components/HomeIntro';
import { CosaTiServe } from '../components/CosaTiServe';
import { PercheMe } from '../components/PercheMe';
import { FinalCTA } from '../components/FinalCTA';
import { FAQ } from '../components/FAQ';

export function Home() {
  return (
    <>
      <NewHero />
      <HomeIntro />
      <CosaTiServe />
      <PercheMe />
      <FinalCTA />
      <FAQ />
    </>
  );
}
