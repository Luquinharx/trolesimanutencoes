import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-dark)] text-[var(--color-brand-light)] font-sans">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <WhatsAppButton />
      <Footer />
    </div>
  );
}

export default App;
