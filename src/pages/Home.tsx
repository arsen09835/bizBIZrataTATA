import { Hero } from '../components/Hero';
import { HomeIntro } from '../components/HomeIntro';
import { HomeProblems } from '../components/HomeProblems';
import { HomeSolution } from '../components/HomeSolution';
import { HomeWhyMe } from '../components/HomeWhyMe';
import { FinalCTA } from '../components/FinalCTA';
import { FAQ } from '../components/FAQ';
import { Divider } from '../components/Divider';

export function Home() {
  return (
    <>
      <Hero />
      <HomeIntro />
      <Divider />
      <HomeProblems />
      <Divider />
      <HomeSolution />
      <Divider />
      <HomeWhyMe />
      <FinalCTA />
      <FAQ />
    </>
  );
}
