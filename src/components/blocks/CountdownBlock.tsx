"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { WEDDING_DATE, WEDDING_DAY } from "@/lib/constants";
import { GlassCard } from "@/components/GlassCard";
import { FadeIn } from "@/components/FadeIn";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function calcTimeLeft(): TimeLeft {
  const diff = WEDDING_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function TimeBlock({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center">
      <div className="flex h-11 w-11 items-center justify-center rounded-xl border-[0.5px] border-stone-200 bg-white/95 font-sans text-xl font-medium tabular-nums text-neutral-900 shadow-editorial sm:h-12 sm:w-12 sm:text-2xl">
        {String(value).padStart(2, "0")}
      </div>
      <span className="mt-1.5 font-sans text-[10px] font-medium uppercase tracking-wider text-neutral-400 sm:text-[11px]">
        {label}
      </span>
    </div>
  );
}

const YEAR = 2026;
const MONTH = 6;

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number) {
  const day = new Date(year, month, 1).getDay();
  return day === 0 ? 6 : day - 1;
}

function MiniCalendar() {
  const { t } = useLanguage();
  const daysInMonth = getDaysInMonth(YEAR, MONTH);
  const firstDay = getFirstDayOfWeek(YEAR, MONTH);

  const cells: (number | null)[] = [
    ...Array(firstDay).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div>
      <p className="mb-2.5 text-center font-sans text-xs font-medium text-neutral-600">
        {t.calendar.month}
      </p>
      <div className="grid grid-cols-7 gap-0.5">
        {t.calendar.weekdays.map((day) => (
          <div
            key={day}
            className="py-0.5 text-center font-sans text-[10px] font-medium text-neutral-400"
          >
            {day}
          </div>
        ))}
        {cells.map((day, i) => (
          <div
            key={i}
            className="flex aspect-square items-center justify-center"
          >
            {day !== null &&
              (day === WEDDING_DAY ? (
                <motion.div
                  animate={{ scale: [1, 1.08, 1] }}
                  transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
                  className="flex h-7 w-7 items-center justify-center rounded-full bg-neutral-900"
                >
                  <span className="font-sans text-[11px] font-semibold text-white">
                    {day}
                  </span>
                </motion.div>
              ) : (
                <span className="font-sans text-[11px] text-neutral-500">{day}</span>
              ))}
          </div>
        ))}
      </div>
    </div>
  );
}

function CountdownTimer({ labels }: { labels: string[] }) {
  const [isMounted, setIsMounted] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    setIsMounted(true);
    setTimeLeft(calcTimeLeft());
    const timer = setInterval(() => setTimeLeft(calcTimeLeft()), 1000);
    return () => clearInterval(timer);
  }, []);

  const values = isMounted
    ? [timeLeft.days, timeLeft.hours, timeLeft.minutes, timeLeft.seconds]
    : [0, 0, 0, 0];

  return (
    <div className="flex justify-center gap-2 sm:gap-3" aria-live="polite">
      {values.map((val, i) => (
        <TimeBlock key={labels[i]} value={val} label={labels[i]} />
      ))}
    </div>
  );
}

export function CountdownBlock() {
  const { t } = useLanguage();
  const labels = [
    t.countdown.days,
    t.countdown.hours,
    t.countdown.minutes,
    t.countdown.seconds,
  ];

  return (
    <section className="px-4 py-5 sm:px-6">
      <FadeIn className="mx-auto max-w-md">
        <GlassCard>
          <h2 className="mb-4 text-center font-sans text-base font-medium tracking-wide text-neutral-900 sm:text-lg">
            {t.countdown.title}
          </h2>
          <CountdownTimer labels={labels} />
          <div className="invite-divider my-4" />
          <MiniCalendar />
          <div className="invite-divider my-4" />
          <p className="text-center font-sans text-xs text-neutral-8900 sm:text-sm">
            {t.calendar.banquet}
          </p>
        </GlassCard>
      </FadeIn>
    </section>
  );
}
