import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene1() {
  const [phase, setPhase] = useState(0);
  const BASE = import.meta.env.BASE_URL;

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 0),
      setTimeout(() => setPhase(2), 600),
      setTimeout(() => setPhase(3), 1400),
      setTimeout(() => setPhase(4), 2200),
      setTimeout(() => setPhase(5), 3200),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  const family = 'FAMILY'.split('');
  const peace = 'PEACE'.split('');
  const house = 'HOUSE'.split('');

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      initial={{ opacity: 1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.04 }}
      transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Background: exterior photo with dark overlay */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.08 }}
        animate={{ scale: 1 }}
        transition={{ duration: 6.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <img
          src={`${BASE}images/exterior.png`}
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Himalaya bg texture at very low opacity, top */}
      <div
        className="absolute inset-0"
        style={{ background: 'linear-gradient(to bottom, rgba(30,26,23,0.75) 0%, rgba(30,26,23,0.45) 40%, rgba(30,26,23,0.8) 100%)' }}
      />

      {/* Decorative top bar */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-[3px]"
        style={{ background: 'linear-gradient(to right, transparent, #c9a961, #E8683A, #c9a961, transparent)' }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={phase >= 1 ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Center content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ perspective: '1200px' }}>

        {/* Decorative line above */}
        <motion.div
          className="flex items-center gap-4 mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="h-px w-16" style={{ background: 'linear-gradient(to right, transparent, #c9a961)' }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: '#c9a961' }} />
          <div className="h-px w-16" style={{ background: 'linear-gradient(to left, transparent, #c9a961)' }} />
        </motion.div>

        {/* FAMILY */}
        <div className="flex overflow-hidden">
          {family.map((char, i) => (
            <motion.span
              key={i}
              style={{
                display: 'inline-block',
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(48px, 10vw, 120px)',
                fontWeight: 300,
                letterSpacing: '0.3em',
                color: '#fbf7f2',
                lineHeight: 1,
              }}
              initial={{ opacity: 0, y: 60, rotateX: -30 }}
              animate={phase >= 2 ? { opacity: 1, y: 0, rotateX: 0 } : { opacity: 0, y: 60, rotateX: -30 }}
              transition={{ type: 'spring', stiffness: 180, damping: 22, delay: phase >= 2 ? i * 0.06 : 0 }}
            >
              {char}
            </motion.span>
          ))}
        </div>

        {/* PEACE HOUSE */}
        <div className="flex items-baseline gap-6 mt-1">
          <div className="flex overflow-hidden">
            {peace.map((char, i) => (
              <motion.span
                key={i}
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(38px, 7.5vw, 88px)',
                  fontWeight: 600,
                  fontStyle: 'italic',
                  letterSpacing: '0.2em',
                  color: '#E8683A',
                  lineHeight: 1,
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ type: 'spring', stiffness: 200, damping: 24, delay: phase >= 3 ? i * 0.05 : 0 }}
              >
                {char}
              </motion.span>
            ))}
          </div>
          <div className="flex overflow-hidden">
            {house.map((char, i) => (
              <motion.span
                key={i}
                style={{
                  display: 'inline-block',
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(38px, 7.5vw, 88px)',
                  fontWeight: 300,
                  letterSpacing: '0.2em',
                  color: '#fbf7f2',
                  lineHeight: 1,
                }}
                initial={{ opacity: 0, y: 40 }}
                animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{ type: 'spring', stiffness: 200, damping: 24, delay: phase >= 3 ? (i + 5) * 0.05 : 0 }}
              >
                {char}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Divider */}
        <motion.div
          className="flex items-center gap-4 mt-8"
          initial={{ opacity: 0, scaleX: 0 }}
          animate={phase >= 4 ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="h-px w-20" style={{ background: 'linear-gradient(to right, transparent, rgba(201,169,97,0.6))' }} />
          <div className="w-1 h-1 rounded-full" style={{ backgroundColor: 'rgba(201,169,97,0.6)' }} />
          <div className="h-px w-20" style={{ background: 'linear-gradient(to left, transparent, rgba(201,169,97,0.6))' }} />
        </motion.div>

        {/* Location */}
        <motion.p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(11px, 1.3vw, 18px)',
            fontWeight: 400,
            letterSpacing: '0.35em',
            color: 'rgba(201,169,97,0.9)',
            marginTop: '20px',
            textTransform: 'uppercase',
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={phase >= 4 ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          Thamel · Kathmandu · Nepal
        </motion.p>

        {/* Tagline */}
        <motion.p
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(14px, 1.8vw, 22px)',
            fontWeight: 300,
            fontStyle: 'italic',
            letterSpacing: '0.05em',
            color: 'rgba(251,247,242,0.65)',
            marginTop: '16px',
          }}
          initial={{ opacity: 0 }}
          animate={phase >= 5 ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        >
          A home away from home in the heart of the Himalayas
        </motion.p>
      </div>

      {/* Bottom decorative line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-[2px]"
        style={{ background: 'linear-gradient(to right, transparent, rgba(232,104,58,0.4), transparent)' }}
        initial={{ scaleX: 0, opacity: 0 }}
        animate={phase >= 1 ? { scaleX: 1, opacity: 1 } : { scaleX: 0, opacity: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
      />
    </motion.div>
  );
}
