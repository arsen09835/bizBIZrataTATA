import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { ProblemReality } from '../components/ProblemReality';
import { LocalAdvantage } from '../components/LocalAdvantage';
import { Services } from '../components/Services';
import { Process } from '../components/Process';
import { FAQ } from '../components/FAQ';
import { FinalCTA } from '../components/FinalCTA';

export function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <ProblemReality />
      <LocalAdvantage />
      <Services />
      <Process />
      <FAQ />
      <FinalCTA />
    </>
  );
}
