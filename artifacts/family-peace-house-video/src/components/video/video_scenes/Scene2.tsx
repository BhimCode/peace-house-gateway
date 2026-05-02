import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene2() {
  const [phase, setPhase] = useState(0);
  const BASE = import.meta.env.BASE_URL;

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 0),
      setTimeout(() => setPhase(2), 500),
      setTimeout(() => setPhase(3), 1100),
      setTimeout(() => setPhase(4), 2000),
      setTimeout(() => setPhase(5), 3500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      initial={{ clipPath: 'inset(0 100% 0 0)' }}
      animate={{ clipPath: 'inset(0 0% 0 0)' }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
    >
      {/* Breakfast photo full-bleed */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.06 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: 'easeOut' }}
      >
        <img
          src={`${BASE}images/courtyard-breakfast.png`}
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Flags overlay top portion */}
      <motion.div
        className="absolute top-0 left-0 right-0"
        style={{ height: '35%' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 2 ? 0.35 : 0 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src={`${BASE}images/courtyard-flags.png`}
          alt=""
          className="w-full h-full object-cover object-bottom"
        />
      </motion.div>

      {/* Dark gradient bottom for text legibility */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to top, rgba(30,26,23,0.92) 0%, rgba(30,26,23,0.5) 45%, rgba(30,26,23,0.15) 100%)' }}
      />

      {/* Left coral accent strip */}
      <motion.div
        className="absolute left-0 top-0 bottom-0 w-1"
        style={{ backgroundColor: '#E8683A' }}
        initial={{ scaleY: 0, originY: 0 }}
        animate={phase >= 1 ? { scaleY: 1 } : { scaleY: 0 }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Bottom content block */}
      <div className="absolute bottom-0 left-0 right-0 px-[8%] pb-[8%]">

        {/* Small label */}
        <motion.p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(10px, 1.1vw, 15px)',
            fontWeight: 500,
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: '#E8683A',
          }}
          initial={{ opacity: 0, x: -20 }}
          animate={phase >= 2 ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          The Courtyard
        </motion.p>

        {/* Main headline */}
        <motion.h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(28px, 5.5vw, 72px)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#fbf7f2',
            lineHeight: 1.1,
            marginTop: '10px',
          }}
          initial={{ opacity: 0, y: 30 }}
          animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Every morning begins with warmth
        </motion.h2>

        {/* Divider line */}
        <motion.div
          className="mt-6 h-px"
          style={{ backgroundColor: 'rgba(201,169,97,0.5)' }}
          initial={{ scaleX: 0, originX: 0 }}
          animate={phase >= 4 ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Subtext */}
        <motion.p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(12px, 1.4vw, 18px)',
            fontWeight: 300,
            color: 'rgba(251,247,242,0.7)',
            marginTop: '14px',
            letterSpacing: '0.02em',
            maxWidth: '60%',
          }}
          initial={{ opacity: 0 }}
          animate={phase >= 5 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Breakfast in our sun-drenched courtyard, under a canopy of prayer flags and blue Himalayan skies.
        </motion.p>
      </div>

      {/* Top right: prayer flag motif dots */}
      <motion.div
        className="absolute top-[10%] right-[6%] flex flex-col gap-3"
        initial={{ opacity: 0, x: 20 }}
        animate={phase >= 3 ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        {['#E8683A', '#c9a961', '#2d6a6a', '#fbf7f2', '#E8683A'].map((c, i) => (
          <motion.div
            key={i}
            className="w-2.5 h-2.5 rounded-full"
            style={{ backgroundColor: c, opacity: 0.8 }}
            animate={{ scale: [1, 1.3, 1] }}
            transition={{ duration: 2, delay: i * 0.3, repeat: Infinity, ease: 'easeInOut' }}
          />
        ))}
      </motion.div>
    </motion.div>
  );
}
