"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Music } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { AUDIO_SRC } from "@/lib/constants";

function SoundWaves() {
  return (
    <div className="flex h-4 items-end gap-[3px]" aria-hidden>
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-[3px] rounded-full bg-stone-50"
          animate={{ height: [4, 14, 6, 12, 4] }}
          transition={{
            duration: 0.9,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function AudioPlayer() {
  const { t } = useLanguage();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);

  useEffect(() => {
    audioRef.current = new Audio(AUDIO_SRC);
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;

    const audio = audioRef.current;
    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  const togglePlay = useCallback(async () => {
    const audio = audioRef.current;
    if (!audio) return;

    setShowTooltip(false);

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch {
        setIsPlaying(false);
      }
    }
  }, [isPlaying]);

  return (
    <div className="fixed bottom-4 right-4 z-[60] flex flex-col items-end gap-2 sm:bottom-5 sm:right-5">
      <AnimatePresence>
        {showTooltip && !isPlaying && (
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.3 }}
            className="rounded-sm border-[0.5px] border-stone-300 bg-white/95 px-3 py-1 font-sans text-[11px] font-normal leading-[1.65] text-stone-800 shadow-editorial"
          >
            {t.audio.tooltip}
          </motion.span>
        )}
      </AnimatePresence>

      <motion.button
        onClick={togglePlay}
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.97 }}
        className="flex h-12 w-12 items-center justify-center rounded-full border-[0.5px] border-stone-900 bg-stone-900 text-stone-50 shadow-editorial"
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? <SoundWaves /> : <Music className="h-5 w-5" strokeWidth={1.5} />}
      </motion.button>
    </div>
  );
}
