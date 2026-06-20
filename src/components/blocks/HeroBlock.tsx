"use client";

import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { FadeIn } from "@/components/FadeIn";
import { COUPLE } from "@/lib/constants";

export function HeroBlock() {
  const { t } = useLanguage();

  return (
    <section>
      <div className="relative h-[75vh] w-full sm:h-[80vh]">
        <Image
          src="/images/img.png"
          alt={`${COUPLE.groom} & ${COUPLE.bride}`}
          fill
          className="object-contain object-center"
          sizes="(max-width: 640px) 100vw, 448px"
          priority
        />
      </div>

      <FadeIn className="px-6 pt-10 pb-6 text-center">
        <p className="font-marck text-xl font-normal leading-[1.65] tracking-wide text-neutral-600 sm:text-2xl">
          {t.guestText}
        </p>
      </FadeIn>
    </section>
  );
}
