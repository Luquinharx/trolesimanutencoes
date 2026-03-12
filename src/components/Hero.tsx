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

        {/* Mobile-only additional overlay for contrast */}
        <div className="absolute inset-0 z-10 bg-black/40 md:hidden pointer-events-none" />

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
        <div className="max-w-4xl mr-auto">
          {/* Eyebrow — since / year */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center gap-3 mb-6"
          >
            <div className="h-px w-10 bg-[var(--color-brand-primary)]" />
            <span className="text-[var(--color-brand-primary)] text-[11px] tracking-[0.45em] uppercase font-medium">
              Desde 2005 · Especialistas em Maquinário
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-[1.08] mb-8 text-left"
            style={{ textShadow: '0 2px 40px rgba(0,0,0,0.8)' }}
          >
            Força Bruta.
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-brand-primary)] to-[var(--color-brand-secondary)]">
              Precisão Fina.
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-gray-200 text-lg md:text-xl font-light leading-relaxed max-w-xl mb-10 text-left"
            style={{ textShadow: '0 1px 20px rgba(0,0,0,0.9)' }}
          >
            Especialistas em montagem, desmontagem e manutenção de maquinário
            industrial para grandes empresas de gás de cozinha.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-start"
          >
            <a
              href="#services"
              className="px-9 py-4 bg-[var(--color-brand-primary)] text-black font-bold rounded-xl text-sm tracking-wide hover:bg-[var(--color-brand-secondary)] hover:scale-105 transition-all duration-300 shadow-lg shadow-[rgba(245,166,35,0.25)] text-center"
            >
              Nossos Serviços
            </a>
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noreferrer"
              className="px-9 py-4 bg-white/10 backdrop-blur-sm border border-white/25 text-white font-semibold rounded-xl text-sm tracking-wide hover:bg-white/20 hover:scale-105 transition-all duration-300 text-center"
            >
              Solicitar Orçamento
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── FLOATING STATS BOX ── */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 w-[90%] max-w-3xl z-30"
      >
        <div className="bg-black/80 backdrop-blur-xl border border-white/15 rounded-2xl p-5 md:p-6 flex flex-col md:flex-row justify-between items-center gap-4 shadow-2xl">
          <div className="text-center md:text-left">
            <p className="text-white/50 text-[10px] uppercase tracking-widest font-semibold mb-1">
              Experiência
            </p>
            <p className="text-white text-lg font-semibold">+19 Anos no Mercado</p>
          </div>
          <div className="hidden md:block w-px h-10 bg-white/15" />
          <div className="text-center md:text-left">
            <p className="text-white/50 text-[10px] uppercase tracking-widest font-semibold mb-1">
              Atuação
            </p>
            <p className="text-white text-lg font-semibold">+10 Estados Brasileiros</p>
          </div>
          <div className="hidden md:block w-px h-10 bg-white/15" />
          <div className="text-center md:text-left">
            <p className="text-white/50 text-[10px] uppercase tracking-widest font-semibold mb-1">
              Projetos
            </p>
            <p className="text-white text-lg font-semibold">+500 Entregues</p>
          </div>
          <div className="hidden md:block w-px h-10 bg-white/15" />
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noreferrer"
            className="w-full md:w-auto px-7 py-3.5 bg-[var(--color-brand-primary)] text-black font-bold rounded-xl hover:bg-[var(--color-brand-secondary)] transition-colors duration-300 text-center text-sm tracking-wide whitespace-nowrap"
          >
            Fale Conosco
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
