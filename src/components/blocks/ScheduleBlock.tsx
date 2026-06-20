"use client";

import { motion } from "framer-motion";
import { MapPin, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { MAP_URL } from "@/lib/constants";
import { GlassCard } from "@/components/GlassCard";
import { FadeIn } from "@/components/FadeIn";

export function ScheduleBlock() {
  const { t } = useLanguage();

  return (
    <section className="px-4 py-5 pb-24 sm:px-6 sm:pb-28">
      <div className="mx-auto max-w-md">
        <FadeIn>
          <GlassCard className="text-center">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="mb-3 inline-flex rounded-full border-[0.5px] border-stone-200 bg-white/95 p-2.5"
            >
              <MapPin className="h-5 w-5 text-stone-800" />
            </motion.div>
            <h3 className="font-sans text-base font-medium text-neutral-900">{t.location.venue}</h3>
            <p className="mb-4 font-sans text-xs leading-[1.65] text-neutral-500">{t.location.city}</p>
            <motion.a
              href={MAP_URL}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-md border-[0.5px] border-stone-900 bg-transparent px-5 py-3.5 font-sans text-sm font-medium text-stone-900 transition-colors hover:bg-stone-900 hover:text-stone-50"
            >
              <MapPin className="h-4 w-4" />
              {t.location.openMap}
              <ExternalLink className="h-3.5 w-3.5 opacity-50" />
            </motion.a>
          </GlassCard>
        </FadeIn>
      </div>
    </section>
  );
}
