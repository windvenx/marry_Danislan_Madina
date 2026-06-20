"use client";

import { LanguageProvider } from "@/context/LanguageContext";
import { LanguageSwitcher } from "@/components/LanguageSwitcher";
import { AudioPlayer } from "@/components/AudioPlayer";
import { HeroBlock } from "@/components/blocks/HeroBlock";
import { CountdownBlock } from "@/components/blocks/CountdownBlock";
import { ScheduleBlock } from "@/components/blocks/ScheduleBlock";

export default function Home() {
  return (
    <LanguageProvider>
      <LanguageSwitcher />
      <AudioPlayer />
      <main className="relative mx-auto max-w-md">
        <HeroBlock />
        <div aria-hidden className="invite-divider mx-6 sm:mx-8" />
        <CountdownBlock />
        <div aria-hidden className="invite-divider mx-6 sm:mx-8" />
        <ScheduleBlock />
      </main>
    </LanguageProvider>
  );
}
