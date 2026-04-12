import { useEffect } from 'react';
import { motion, useScroll, useSpring } from 'framer-motion';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import ProjectSection from './components/ProjectSection';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiff: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    // Custom cursor or other global effects can be initialized here
  }, []);

  return (
    <div className="relative">
      {/* Dynamic Scroll Progress Indicator */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-thin bg-primary-accent z-top origin-left"
        style={{ scaleX }}
      />

      <Navbar />
      
      <main>
        <Hero />
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="relative"
        >
          <Skills />
          <ProjectSection />
          <Experience />
        </motion.div>
      </main>

      <Footer />

      {/* Subtle Bottom Glow */}
      <div className="fixed bottom-0 left-half translate-x-half w-full max-w-4xl h-32 bg-glow-soft blur-extravagant pointer-events-none z-below" />
    </div>
  );
}

export default App;
