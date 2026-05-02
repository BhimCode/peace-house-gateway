import { AnimatePresence, motion } from 'framer-motion';
import { useEffect } from 'react';
import { useVideoPlayer } from '@/lib/video';
import { Scene1 } from './video_scenes/Scene1';
import { Scene2 } from './video_scenes/Scene2';
import { Scene3 } from './video_scenes/Scene3';
import { Scene4 } from './video_scenes/Scene4';
import { Scene5 } from './video_scenes/Scene5';
import { SCENE_DURATIONS } from './sceneDurations';

export { SCENE_DURATIONS };

const SCENE_COMPONENTS: Record<string, React.ComponentType> = {
  open: Scene1,
  courtyard: Scene2,
  rooms: Scene3,
  location: Scene4,
  close: Scene5,
};

export default function VideoTemplate({
  durations = SCENE_DURATIONS,
  loop = true,
  onSceneChange,
}: {
  durations?: Record<string, number>;
  loop?: boolean;
  onSceneChange?: (sceneKey: string) => void;
} = {}) {
  const { currentScene, currentSceneKey } = useVideoPlayer({ durations, loop });

  const baseSceneKey = currentSceneKey.replace(/_r[12]$/, '') as keyof typeof SCENE_DURATIONS;
  const sceneIndex = Object.keys(SCENE_DURATIONS).indexOf(baseSceneKey);

  useEffect(() => {
    onSceneChange?.(currentSceneKey);
  }, [currentSceneKey, onSceneChange]);

  const SceneComponent = SCENE_COMPONENTS[baseSceneKey];

  // Persistent midground element positions per scene
  const accentPositions = [
    { left: '5%', top: '15%', width: '8vw', height: '8vw', opacity: 0.12 },
    { left: '80%', top: '8%', width: '6vw', height: '6vw', opacity: 0.1 },
    { left: '88%', top: '75%', width: '5vw', height: '5vw', opacity: 0.09 },
    { left: '3%', top: '65%', width: '7vw', height: '7vw', opacity: 0.11 },
    { left: '48%', top: '5%', width: '6vw', height: '6vw', opacity: 0.1 },
  ];

  const goldLineConfig = [
    { top: '50%', left: '3%', width: '12%' },
    { top: '18%', left: '60%', width: '8%' },
    { top: '82%', left: '25%', width: '10%' },
    { top: '35%', left: '80%', width: '6%' },
    { top: '92%', left: '10%', width: '14%' },
  ];

  const pos = accentPositions[sceneIndex] ?? accentPositions[0];
  const line = goldLineConfig[sceneIndex] ?? goldLineConfig[0];

  return (
    <div className="relative w-full h-screen overflow-hidden" style={{ backgroundColor: '#1e1a17' }}>

      {/* Persistent drifting orb — outside AnimatePresence */}
      <motion.div
        className="absolute rounded-full blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(232,104,58,0.15), transparent)' }}
        animate={{
          left: pos.left,
          top: pos.top,
          width: pos.width,
          height: pos.height,
          opacity: pos.opacity,
        }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Persistent gold accent line */}
      <motion.div
        className="absolute h-px pointer-events-none"
        style={{ backgroundColor: 'rgba(201,169,97,0.25)' }}
        animate={{
          top: line.top,
          left: line.left,
          width: line.width,
        }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      />

      {/* Persistent slow-rotating decorative ring — always present */}
      <motion.div
        className="absolute rounded-full border pointer-events-none"
        style={{
          width: '18vw',
          height: '18vw',
          borderColor: 'rgba(201,169,97,0.06)',
          right: '-3vw',
          top: '-3vw',
        }}
        animate={{ rotate: 360 }}
        transition={{ duration: 18, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute rounded-full border pointer-events-none"
        style={{
          width: '12vw',
          height: '12vw',
          borderColor: 'rgba(232,104,58,0.05)',
          left: '-2vw',
          bottom: '-2vw',
        }}
        animate={{ rotate: -360 }}
        transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
      />

      {/* Scene renderer */}
      <AnimatePresence initial={false} mode="popLayout">
        {SceneComponent && <SceneComponent key={currentSceneKey} />}
      </AnimatePresence>
    </div>
  );
}
