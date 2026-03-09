import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { ContactForm } from './components/ContactForm';
import { Problem } from './components/Problem';
import { Reality } from './components/Reality';
import { Solutions } from './components/Solutions';
import { MySolution } from './components/MySolution';
import { HowIWork } from './components/HowIWork';
import { TargetAudience } from './components/TargetAudience';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <ContactForm />
        <Problem />
        <Reality />
        <Solutions />
        <MySolution />
        <HowIWork />
        <TargetAudience />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;
