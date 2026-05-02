import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

export function Scene3() {
  const [phase, setPhase] = useState(0);
  const BASE = import.meta.env.BASE_URL;

  useEffect(() => {
    const timers = [
      setTimeout(() => setPhase(1), 0),
      setTimeout(() => setPhase(2), 400),
      setTimeout(() => setPhase(3), 900),
      setTimeout(() => setPhase(4), 1700),
      setTimeout(() => setPhase(5), 2800),
    ];
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <motion.div
      className="absolute inset-0 overflow-hidden"
      style={{ backgroundColor: '#1e1a17' }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.03 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background texture layer */}
      <motion.div
        className="absolute inset-0"
        style={{ opacity: 0.08 }}
      >
        <img
          src={`${BASE}images/warm-texture.png`}
          alt=""
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Two room photos side by side */}
      <div className="absolute inset-0 flex">

        {/* Left: twin room */}
        <motion.div
          className="relative flex-1 overflow-hidden"
          initial={{ clipPath: 'inset(0 100% 0 0)' }}
          animate={phase >= 1 ? { clipPath: 'inset(0 0% 0 0)' } : { clipPath: 'inset(0 100% 0 0)' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <motion.img
            src={`${BASE}images/room-twin.png`}
            alt=""
            className="w-full h-full object-cover"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 7, ease: 'easeOut' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(30,26,23,0.0) 70%, rgba(30,26,23,0.9) 100%), linear-gradient(to top, rgba(30,26,23,0.7) 0%, transparent 50%)' }}
          />
          {/* Twin room label */}
          <motion.div
            className="absolute bottom-[28%] left-[8%]"
            initial={{ opacity: 0, y: 15 }}
            animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(9px, 0.9vw, 13px)', letterSpacing: '0.3em', color: '#E8683A', textTransform: 'uppercase', fontWeight: 500 }}>Twin Room</p>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(16px, 2.2vw, 28px)', color: '#fbf7f2', fontStyle: 'italic', marginTop: '4px' }}>Clean · Bright · Peaceful</p>
          </motion.div>
        </motion.div>

        {/* Center divider */}
        <motion.div
          className="w-[2px] z-10 self-stretch"
          style={{ backgroundColor: '#E8683A' }}
          initial={{ scaleY: 0 }}
          animate={phase >= 1 ? { scaleY: 1 } : { scaleY: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        />

        {/* Right: family room */}
        <motion.div
          className="relative flex-1 overflow-hidden"
          initial={{ clipPath: 'inset(0 0 0 100%)' }}
          animate={phase >= 2 ? { clipPath: 'inset(0 0 0 0%)' } : { clipPath: 'inset(0 0 0 100%)' }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        >
          <motion.img
            src={`${BASE}images/room-family.png`}
            alt=""
            className="w-full h-full object-cover"
            initial={{ scale: 1.08 }}
            animate={{ scale: 1 }}
            transition={{ duration: 7, ease: 'easeOut' }}
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to left, rgba(30,26,23,0.0) 70%, rgba(30,26,23,0.9) 100%), linear-gradient(to top, rgba(30,26,23,0.7) 0%, transparent 50%)' }}
          />
          {/* Family room label */}
          <motion.div
            className="absolute bottom-[28%] right-[8%] text-right"
            initial={{ opacity: 0, y: 15 }}
            animate={phase >= 3 ? { opacity: 1, y: 0 } : { opacity: 0, y: 15 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(9px, 0.9vw, 13px)', letterSpacing: '0.3em', color: '#E8683A', textTransform: 'uppercase', fontWeight: 500 }}>Family Room</p>
            <p style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(16px, 2.2vw, 28px)', color: '#fbf7f2', fontStyle: 'italic', marginTop: '4px' }}>Spacious · Warm · Together</p>
          </motion.div>
        </motion.div>
      </div>

      {/* Top headline overlay */}
      <div className="absolute top-0 left-0 right-0 flex flex-col items-center pt-[6%]">
        <motion.div
          className="h-px mb-5"
          style={{ backgroundColor: 'rgba(201,169,97,0.6)', width: '120px' }}
          initial={{ scaleX: 0 }}
          animate={phase >= 2 ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        />
        <motion.h2
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(20px, 3.5vw, 46px)',
            fontWeight: 300,
            letterSpacing: '0.05em',
            color: '#fbf7f2',
            textAlign: 'center',
          }}
          initial={{ opacity: 0, y: -20 }}
          animate={phase >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          Your Home in the Himalayas
        </motion.h2>
        <motion.div
          className="h-px mt-5"
          style={{ backgroundColor: 'rgba(201,169,97,0.6)', width: '120px' }}
          initial={{ scaleX: 0 }}
          animate={phase >= 2 ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
        />
      </div>

      {/* Bottom amenities */}
      <motion.div
        className="absolute bottom-[6%] left-0 right-0 flex justify-center gap-[5%]"
        initial={{ opacity: 0, y: 20 }}
        animate={phase >= 5 ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
        transition={{ duration: 0.7 }}
      >
        {['Free Wi-Fi', 'Hot Showers', 'Local Breakfast', 'Trek Planning'].map((item, i) => (
          <div key={i} className="flex flex-col items-center gap-1">
            <div className="w-1 h-1 rounded-full" style={{ backgroundColor: '#c9a961' }} />
            <p style={{ fontFamily: 'var(--font-body)', fontSize: 'clamp(9px, 0.9vw, 13px)', letterSpacing: '0.2em', color: 'rgba(251,247,242,0.6)', textTransform: 'uppercase' }}>{item}</p>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}
