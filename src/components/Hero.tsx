import { useRef, useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [hasScrolled, setHasScrolled] = useState(false);

  // Scroll progress for this section
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end start'],
  });

  // Extremely subtle zoom to minimize interpolation artifacts
  const scale = useTransform(scrollYProgress, [0, 0.35], [1.025, 1]);
  // Darker overlay for better text contrast
  const overlayOpacity = useTransform(scrollYProgress, [0, 0.35], [0.65, 0.8]);

  // Track scroll
  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle video hover
  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {});
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative w-full min-h-[100dvh] md:h-[120vh] overflow-hidden bg-black flex items-center justify-center"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* ── VIDEO BACKGROUND with scroll-zoom ── */}
      <motion.div
        className="absolute inset-0 w-full h-full origin-center"
        style={{ scale, willChange: 'transform' }}
      >
        {/* Dark gradient overlay — significantly increased for Mobile Readability */}
        <motion.div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            opacity: overlayOpacity,
            background:
              'linear-gradient(to right, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.85) 100%)', // Increased opacity
          }}
        />

          {/* Mobile-only additional overlay for contrast - Stronger */}
        <div className="absolute inset-0 z-10 bg-black/60 md:hidden pointer-events-none" />

        {/* Additional bottom vignette for text legibility */}
        <div
          className="absolute inset-0 z-10 pointer-events-none"
          style={{
            background:
              'radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.8) 100%)',
          }}
        />

        <video
          ref={videoRef}
          loop
          muted
          playsInline
          preload="auto"
          poster="/fotohero.jpeg"
          className="w-full h-full object-cover"
          style={{ 
            willChange: 'transform',
            transform: 'translateZ(0)' // Hardware acceleration hack
          }}
        >
          <source src="/videohero.mp4" type="video/mp4" />
        </video>
      </motion.div>

      {/* ── SCROLL INDICATOR ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: hasScrolled ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="absolute bottom-44 left-1/2 -translate-x-1/2 z-30 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-[10px] tracking-[0.35em] uppercase font-light">
            Role para explorar
          </span>
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 5v14M19 12l-7 7-7-7" />
          </svg>
        </motion.div>
      </motion.div>

      {/* ── HERO CONTENT — Repositioned ── */}
      <div 
        className="container relative z-20 px-6 md:px-12 flex flex-col justify-center h-full pb-32"
      >
        <div className="max-w-4xl mr-auto w-full flex flex-col items-center md:items-start">
          {/* Eyebrow — since / year */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center gap-3 mb-6"
          >
            <div className="h-px w-10 bg-[var(--color-brand-primary)] md:block hidden" />
            <span className="text-[var(--color-brand-primary)] text-[11px] tracking-[0.45em] uppercase font-medium text-center md:text-left leading-relaxed">
              Desde 2005 · Especialistas em Maquinário
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-sans font-bold text-white tracking-tight leading-[1.05] mb-6 text-center md:text-left"
            style={{ textShadow: '0 4px 60px rgba(0,0,0,0.9)' }}
          >
            Força Bruta.
            <br />
            <span className="text-[var(--color-brand-primary)]">
                Precisão Fina.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-300 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-12 text-center md:text-left"
            style={{ textShadow: '0 2px 30px rgba(0,0,0,0.9)' }}
          >
            Especialistas em montagem, desmontagem e manutenção de maquinário
            industrial para grandes empresas de gás de cozinha.
          </motion.p>
          
          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start w-full md:w-auto"
          >
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noreferrer"
              className="w-full md:w-auto px-10 py-5 bg-[var(--color-brand-primary)] text-black font-bold rounded-xl text-base tracking-wide hover:bg-[var(--color-brand-primary)]/90 hover:scale-[1.02] transition-all duration-300 shadow-[0_0_40px_rgba(245,166,35,0.3)] text-center"
            >
              Solicitar Orçamento
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── ANIMATED STATS CARDS ── */}
      <div 
        className="absolute bottom-6 md:bottom-12 left-0 w-full z-30 px-4 pointer-events-none"
      >
        <div className="container mx-auto max-w-5xl pointer-events-auto">
            <div className="grid grid-cols-3 md:flex md:justify-center gap-3 md:gap-8">
                {[
                    { number: 19, label: "Anos de Mercado", delay: 0 },
                    { number: 10, label: "Estados Atendidos", delay: 0.1 },
                    { number: 500, label: "Projetos Entregues", delay: 0.2 }
                ].map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 1 + stat.delay }}
                        whileHover={{ y: -5, borderColor: 'rgba(245,166,35,0.5)', backgroundColor: 'rgba(0,0,0,0.9)' }}
                        className="flex-1 bg-black/60 backdrop-blur-md border border-white/10 rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center text-center group transition-all duration-300 shadow-lg hover:shadow-[0_0_30px_rgba(245,166,35,0.15)]"
                    >
                        <h3 className="text-2xl md:text-5xl font-bold text-white mb-1 md:mb-2 group-hover:text-[var(--color-brand-primary)] transition-colors">
                           +{stat.number}
                        </h3>
                        <p className="text-[9px] md:text-xs text-gray-300 uppercase tracking-widest font-medium group-hover:text-white transition-colors leading-tight">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
