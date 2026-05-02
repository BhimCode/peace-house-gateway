import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene5() {
  const [phase, setPhase] = useState(0);
  const BASE = import.meta.env.BASE_URL;

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 0),
      setTimeout(() => setPhase(2), 500),
      setTimeout(() => setPhase(3), 1100),
      setTimeout(() => setPhase(4), 2000),
      setTimeout(() => setPhase(5), 3000),
      setTimeout(() => setPhase(6), 4500),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.97 }}
      transition={{ duration: 0.7 }}
    >
      {/* Warm texture background */}
      <div className="absolute inset-0" style={{ backgroundColor: '#1e1a17' }} />

      <motion.div
        className="absolute inset-0"
        style={{ opacity: 0.18 }}
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      >
        <img
          src={`${BASE}images/warm-texture.png`}
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Prayer flags photo at top, faded */}
      <motion.div
        className="absolute top-0 left-0 right-0"
        style={{ height: '40%', opacity: 0 }}
        animate={phase >= 2 ? { opacity: 0.3 } : { opacity: 0 }}
        transition={{ duration: 1.5 }}
      >
        <img
          src={`${BASE}images/courtyard-flags.png`}
          alt=""
          className="w-full h-full object-cover object-center"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to bottom, transparent 0%, #1e1a17 100%)' }}
        />
      </motion.div>

      {/* Animated gradient overlay */}
      <motion.div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, rgba(232,104,58,0.08) 0%, transparent 70%)' }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-[10%]" style={{ perspective: '1200px' }}>

        {/* Top ornament */}
        <motion.div
          className="flex items-center gap-5 mb-10"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={phase >= 1 ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="h-px w-20" style={{ background: 'linear-gradient(to right, transparent, #c9a961)' }} />
          <div className="flex gap-2 items-center">
            {['#E8683A', '#c9a961', '#fbf7f2', '#c9a961', '#E8683A'].map((c, i) => (
              <motion.div
                key={i}
                className="w-1.5 h-1.5 rounded-full"
                style={{ backgroundColor: c }}
                animate={{ opacity: [0.6, 1, 0.6] }}
                transition={{ duration: 2, delay: i * 0.2, repeat: Infinity }}
              />
            ))}
          </div>
          <div className="h-px w-20" style={{ background: 'linear-gradient(to left, transparent, #c9a961)' }} />
        </motion.div>

        {/* "Welcome to" */}
        <motion.p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(11px, 1.2vw, 17px)',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: 'rgba(201,169,97,0.8)',
            fontWeight: 400,
            marginBottom: '16px',
          }}
          initial={{ opacity: 0 }}
          animate={phase >= 2 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          Welcome to
        </motion.p>

        {/* Main name */}
        <motion.h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(40px, 8vw, 100px)',
            fontWeight: 400,
            fontStyle: 'italic',
            color: '#fbf7f2',
            lineHeight: 1,
            letterSpacing: '0.02em',
          }}
          initial={{ opacity: 0, y: 30, rotateX: -15 }}
          animate={phase >= 3 ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 30, rotateX: -15 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          Family Peace House
        </motion.h1>

        {/* Coral underline accent */}
        <motion.div
          className="mt-5 h-[2px] rounded-full"
          style={{ background: 'linear-gradient(to right, transparent, #E8683A 30%, #c9a961 70%, transparent)', width: '340px', maxWidth: '80%' }}
          initial={{ scaleX: 0 }}
          animate={phase >= 3 ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        />

        {/* Tagline */}
        <motion.p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(18px, 3vw, 40px)',
            fontWeight: 300,
            fontStyle: 'italic',
            color: '#c9a961',
            letterSpacing: '0.08em',
            marginTop: '24px',
          }}
          initial={{ opacity: 0, y: 15 }}
          animate={phase >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          Stay. Explore. Return.
        </motion.p>

        {/* Location sub */}
        <motion.p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(10px, 1.1vw, 15px)',
            letterSpacing: '0.3em',
            textTransform: 'uppercase',
            color: 'rgba(251,247,242,0.5)',
            marginTop: '20px',
            fontWeight: 300,
          }}
          initial={{ opacity: 0 }}
          animate={phase >= 4 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Thamel · Kathmandu · Nepal
        </motion.p>

        {/* Bottom CTA area (visual only) */}
        <motion.div
          className="mt-14 flex items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={phase >= 5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="h-px w-12" style={{ backgroundColor: 'rgba(232,104,58,0.5)' }} />
          <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(10px, 1vw, 14px)', letterSpacing: '0.25em', color: 'rgba(232,104,58,0.8)', textTransform: 'uppercase', fontWeight: 500 }}>familypeacehouse.com</p>
          <div className="h-px w-12" style={{ backgroundColor: 'rgba(232,104,58,0.5)' }} />
        </motion.div>
      </div>

      {/* Floating ambient circles */}
      {([
        { w: 280, h: 280, top: '5%', left: '-8%', right: undefined, color: 'rgba(232,104,58,0.06)', dur: 7 },
        { w: 200, h: 200, top: '60%', left: undefined, right: '-5%', color: 'rgba(201,169,97,0.07)', dur: 9 },
        { w: 150, h: 150, top: '40%', left: '5%', right: undefined, color: 'rgba(45,106,106,0.06)', dur: 5 },
      ] as Array<{ w: number; h: number; top: string; left: string | undefined; right: string | undefined; color: string; dur: number }>).map((c, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-2xl"
          style={{ width: c.w, height: c.h, top: c.top, left: c.left, right: c.right, background: c.color }}
          animate={{ scale: [1, 1.2, 1], x: [0, 15, 0], y: [0, -10, 0] }}
          transition={{ duration: c.dur, repeat: Infinity, ease: 'easeInOut', delay: i * 1.5 }}
        />
      ))}
    </motion.div>
  );
}
