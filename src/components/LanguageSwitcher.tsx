"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export function LanguageSwitcher() {
  const { t, toggleLang } = useLanguage();

  return (
    <motion.button
      initial={{ opacity: 0, y: -8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      onClick={toggleLang}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.96 }}
      className="fixed top-3 right-3 z-[60] rounded-sm border-[0.5px] border-stone-900 bg-transparent px-3.5 py-1.5 font-sans text-xs font-medium tracking-wide text-stone-900 sm:top-4 sm:right-4 sm:px-4 sm:py-2 sm:text-sm"
      aria-label="Switch language"
    >
      {t.langSwitch}
    </motion.button>
  );
}
