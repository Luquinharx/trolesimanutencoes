import { useEffect, useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onComplete: () => void;
}

/** Generates sparkle particles that fly outward from center */
function generateParticles(count: number) {
  return Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2;
    const radius = 120 + Math.random() * 100;
    return {
      id: i,
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius,
      size: 1.5 + Math.random() * 2.5,
      delay: 0.6 + Math.random() * 0.8,
      duration: 1.2 + Math.random() * 1.4,
    };
  });
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const [visible, setVisible] = useState(true);
  const particles = useMemo(() => generateParticles(24), []);

  // 3.8s total: coin flips (2.8s) + brand name reveal (0.6s) + brief pause
  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 3800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence onExitComplete={onComplete}>
      {visible && (
        <motion.div
          key="loading"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.04 }}
          transition={{ duration: 0.75, ease: 'easeInOut' }}
          className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black overflow-hidden"
        >
          {/* Subtle grid texture */}
          <div
            className="absolute inset-0 opacity-[0.04] pointer-events-none"
            style={{
              backgroundImage:
                'linear-gradient(rgba(245,166,35,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(245,166,35,0.6) 1px, transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />

          {/* Radial ambient glow */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: [0, 0.45, 0.25], scale: [0.5, 1.3, 1.1] }}
            transition={{ duration: 2.5, ease: 'easeOut' }}
            className="absolute w-[500px] h-[500px] rounded-full pointer-events-none"
            style={{
              background:
                'radial-gradient(circle, rgba(245,166,35,0.22) 0%, rgba(245,166,35,0.05) 50%, transparent 70%)',
            }}
          />

          {/* Outer slow-spin ring */}
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 0.15, rotate: 360 }}
            transition={{
              opacity: { duration: 1 },
              rotate: { duration: 12, repeat: Infinity, ease: 'linear' },
            }}
            className="absolute w-[280px] h-[280px] rounded-full pointer-events-none"
            style={{
              border: '1px dashed rgba(245,166,35,0.6)',
            }}
          />

          {/* Inner counter-spin ring */}
          <motion.div
            initial={{ opacity: 0, rotate: 0 }}
            animate={{ opacity: 0.1, rotate: -360 }}
            transition={{
              opacity: { duration: 1, delay: 0.3 },
              rotate: { duration: 7, repeat: Infinity, ease: 'linear' },
            }}
            className="absolute w-[220px] h-[220px] rounded-full pointer-events-none"
            style={{
              border: '1px solid rgba(245,166,35,0.4)',
            }}
          />

          {/* Sparkle particles — burst on coin settle */}
          {particles.map((p) => (
            <motion.span
              key={p.id}
              initial={{ opacity: 0, x: 0, y: 0, scale: 0 }}
              animate={{
                opacity: [0, 0.9, 0],
                x: [0, p.x * 0.6, p.x],
                y: [0, p.y * 0.6, p.y],
                scale: [0, 1, 0],
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                ease: 'easeOut',
              }}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: p.size,
                height: p.size,
                backgroundColor: 'var(--color-brand-primary)',
                filter: 'blur(0.5px)',
                boxShadow: '0 0 4px rgba(245,166,35,0.8)',
              }}
            />
          ))}

          {/* ── COIN FLIP ── */}
          <div style={{ perspective: '900px' }} className="relative z-10">
            {/* Glow bloom behind the coin */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: [0, 0.7, 0.4], scale: [0.6, 1.1, 0.95] }}
              transition={{ duration: 2, ease: 'easeOut' }}
              className="absolute inset-0 rounded-full pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle, rgba(245,166,35,0.55) 0%, transparent 65%)',
                filter: 'blur(18px)',
              }}
            />

            {/* The spinning coin */}
            <motion.div
              initial={{ rotateY: 0, y: -20, opacity: 0 }}
              animate={{
                rotateY: [0, 360, 720, 900, 1080],
                y: [-20, 0, -6, 4, 0],
                opacity: [0, 1, 1, 1, 1],
              }}
              transition={{
                duration: 2.8,
                times: [0, 0.3, 0.6, 0.85, 1],
                ease: 'easeOut',
              }}
              style={{ transformStyle: 'preserve-3d' }}
              className="relative w-40 h-40"
            >
              {/* Gold coin edge ring */}
              <div
                className="absolute -inset-[5px] rounded-full"
                style={{
                  background:
                    'conic-gradient(from 0deg, #c47d0e, #f5a623, #ffca66, #f5a623, #c47d0e, #f5a623, #ffca66, #c47d0e)',
                }}
              />
              {/* Inner shadow ring */}
              <div
                className="absolute -inset-[2px] rounded-full"
                style={{
                  background: 'rgba(10,8,4,0.6)',
                }}
              />

              {/* Logo face */}
              <img
                src="/logo.png"
                alt="Trolesi Logo"
                className="relative w-40 h-40 rounded-full object-contain z-10"
                style={{
                  border: '2px solid rgba(245,166,35,0.5)',
                  boxShadow:
                    '0 0 30px rgba(245,166,35,0.35), inset 0 0 15px rgba(0,0,0,0.4)',
                }}
              />

              {/* Spinning glint / shimmer */}
              <motion.div
                className="absolute inset-0 rounded-full z-20 pointer-events-none"
                animate={{
                  opacity: [0, 0.55, 0, 0.4, 0, 0.3, 0],
                }}
                transition={{
                  duration: 2.8,
                  times: [0, 0.15, 0.3, 0.45, 0.6, 0.75, 1],
                  ease: 'linear',
                }}
                style={{
                  background:
                    'linear-gradient(120deg, transparent 25%, rgba(255,255,255,0.55) 50%, transparent 75%)',
                }}
              />
            </motion.div>
          </div>

          {/* Brand name — fades in after coin settles */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mt-10 text-center z-10"
          >
            <p
              className="text-white text-2xl font-serif tracking-[0.35em] uppercase"
              style={{ textShadow: '0 0 30px rgba(245,166,35,0.3)' }}
            >
              Trolesi
            </p>
            <div className="flex items-center gap-3 mt-1 justify-center">
              <div className="h-px w-8 bg-[var(--color-brand-primary)]/50" />
              <p className="text-[var(--color-brand-primary)] text-[10px] tracking-[0.55em] uppercase font-medium">
                Manutenções
              </p>
              <div className="h-px w-8 bg-[var(--color-brand-primary)]/50" />
            </div>
          </motion.div>

          {/* Progress bar */}
          <motion.div
            className="absolute bottom-[14%] left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
          >
            <div className="relative h-[1px] w-44 bg-white/10 rounded-full overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full rounded-full bg-[var(--color-brand-primary)]"
                initial={{ width: '0%' }}
                animate={{ width: '100%' }}
                transition={{ duration: 3.5, ease: 'easeInOut' }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              transition={{ delay: 0.5 }}
              className="text-white/40 text-[10px] tracking-widest uppercase"
            >
              Carregando...
            </motion.p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
