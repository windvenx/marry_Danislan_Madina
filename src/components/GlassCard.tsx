"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { type ReactNode } from "react";

interface GlassCardProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  className?: string;
}

export function GlassCard({ children, className = "", ...props }: GlassCardProps) {
  return (
    <motion.div
      className={`rounded-2xl border-[0.5px] border-stone-200 bg-white/95 p-4 shadow-editorial sm:p-5 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
