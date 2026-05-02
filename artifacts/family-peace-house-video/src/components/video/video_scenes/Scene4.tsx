import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene4() {
  const [phase, setPhase] = useState(0);
  const BASE = import.meta.env.BASE_URL;

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 0),
      setTimeout(() => setPhase(2), 700),
      setTimeout(() => setPhase(3), 1400),
      setTimeout(() => setPhase(4), 2300),
      setTimeout(() => setPhase(5), 3400),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* Himalaya background */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 7, ease: 'easeOut' }}
      >
        <img
          src={`${BASE}images/himalaya-bg.png`}
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Dark overlay with teal tint */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(135deg, rgba(30,26,23,0.85) 0%, rgba(45,106,106,0.55) 50%, rgba(30,26,23,0.9) 100%)' }}
      />

      {/* Slow drifting radial highlight */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: '50vw',
          height: '50vw',
          background: 'radial-gradient(circle, rgba(201,169,97,0.12) 0%, transparent 70%)',
          top: '10%',
          left: '-10%',
        }}
        animate={{ x: [0, 40, 0], y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Flags texture on top */}
      <motion.div
        className="absolute top-0 left-0 right-0"
        style={{ height: '30%' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: phase >= 2 ? 0.25 : 0 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src={`${BASE}images/courtyard-flags.png`}
          alt=""
          className="w-full h-full object-cover object-center"
        />
      </motion.div>

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-[10%]" style={{ perspective: '1200px' }}>

        {/* Location badge */}
        <motion.div
          className="flex items-center gap-3 mb-8"
          initial={{ opacity: 0, y: -15 }}
          animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0, y: -15 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="h-px w-12" style={{ background: 'linear-gradient(to right, transparent, #2d6a6a)' }} />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(10px, 1.1vw, 15px)', letterSpacing: '0.35em', color: '#2d6a6a', textTransform: 'uppercase', fontWeight: 600 }}>Location</p>
          <div className="h-px w-12" style={{ background: 'linear-gradient(to left, transparent, #2d6a6a)' }} />
        </motion.div>

        {/* THAMEL */}
        <motion.h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(52px, 11vw, 140px)',
            fontWeight: 300,
            letterSpacing: '0.15em',
            color: '#fbf7f2',
            lineHeight: 0.9,
          }}
          initial={{ opacity: 0, rotateX: -25, y: 40 }}
          animate={phase >= 2 ? { opacity: 1, rotateX: 0, y: 0 } : { opacity: 0, rotateX: -25, y: 40 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          THAMEL
        </motion.h2>

        <motion.h3
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(20px, 4vw, 54px)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#c9a961',
            letterSpacing: '0.08em',
            marginTop: '6px',
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Kathmandu, Nepal
        </motion.h3>

        {/* Divider */}
        <motion.div
          className="my-8 h-px"
          style={{ backgroundColor: 'rgba(201,169,97,0.4)', width: '160px' }}
          initial={{ scaleX: 0 }}
          animate={phase >= 3 ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        />

        {/* Gateway tagline */}
        <motion.p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(16px, 2.4vw, 32px)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: 'rgba(251,247,242,0.85)',
            maxWidth: '640px',
            lineHeight: 1.4,
          }}
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          The perfect base for your Himalayan adventures — Everest, Annapurna, and beyond
        </motion.p>

        {/* Trek tags */}
        <motion.div
          className="flex gap-4 mt-8 flex-wrap justify-center"
          initial={{ opacity: 0 }}
          animate={phase >= 5 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          {['Everest Base Camp', 'Annapurna Circuit', 'Langtang Valley', 'Pokhara'].map((tag, i) => (
            <motion.span
              key={i}
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(9px, 0.9vw, 13px)',
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: 'rgba(251,247,242,0.6)',
                borderBottom: '1px solid rgba(201,169,97,0.4)',
                paddingBottom: '2px',
              }}
              initial={{ opacity: 0, y: 10 }}
              animate={phase >= 5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Corner accent teal blocks */}
      <motion.div
        className="absolute top-[8%] left-[6%] w-16 h-16 border"
        style={{ borderColor: 'rgba(45,106,106,0.4)' }}
        animate={{ rotate: [0, 45, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[8%] right-[6%] w-10 h-10 border"
        style={{ borderColor: 'rgba(201,169,97,0.35)' }}
        animate={{ rotate: [45, 0, 45] }}
        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
      />
    </motion.div>
  );
}
