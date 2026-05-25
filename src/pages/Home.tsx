import { Hero } from '../components/Hero';
import { TrustStrip } from '../components/TrustStrip';
import { Services } from '../components/Services';
import { ProblemReality } from '../components/ProblemReality';
import { Process } from '../components/Process';
import { LocalAdvantage } from '../components/LocalAdvantage';
import { FAQ } from '../components/FAQ';
import { FinalCTA } from '../components/FinalCTA';

export function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Services />
      <ProblemReality />
      <Process />
      <LocalAdvantage />
      <FAQ />
      <FinalCTA />
    </>
  );
}
