import { Hero } from '../components/Hero';
import { HomeIntro } from '../components/HomeIntro';
import { HomeProblems } from '../components/HomeProblems';
import { HomeSolution } from '../components/HomeSolution';
import { HomeWhyMe } from '../components/HomeWhyMe';
import { FinalCTA } from '../components/FinalCTA';

export function Home() {
  return (
    <>
      <Hero />
      <HomeIntro />
      <HomeProblems />
      <HomeSolution />
      <HomeWhyMe />
      <FinalCTA />
    </>
  );
}
