import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhySection from './components/WhySection';
import WhatSection from './components/WhatSection';
import EcosystemSection from './components/EcosystemSection';
import ArchitectureSection from './components/ArchitectureSection';
import StatsSection from './components/StatsSection';
import ContributeSection from './components/ContributeSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <WhySection />
        <WhatSection />
        <EcosystemSection />
        <ArchitectureSection />
        <StatsSection />
        <ContributeSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
