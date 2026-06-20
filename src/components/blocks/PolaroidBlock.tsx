"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useLanguage } from "@/context/LanguageContext";
import { FadeIn } from "@/components/FadeIn";
import { HandHeart } from "@/components/HandHeart";

// Минималистичный, благородный цвет для летающих сердечек вокруг полароида
const HEART_COLOR = "text-rose-300/60";

export function PolaroidBlock() {
  const { t } = useLanguage();

  return (
    <section className="px-4 py-8 sm:px-6">
      <div className="mx-auto max-w-md text-center">
        <FadeIn>
          <div className="relative mx-auto flex min-h-[22rem] w-full items-center justify-center sm:min-h-[25rem]">
            
            {/* Легкие, аккуратные декоративные сердечки по бокам */}
            <HandHeart
              filled
              className={`absolute left-4 top-8 h-3.5 w-3.5 sm:left-8 ${HEART_COLOR}`}
            />
            <HandHeart
              filled
              className={`absolute right-4 top-12 h-3 w-3 rotate-12 sm:right-8 ${HEART_COLOR}`}
            />
            <HandHeart
              filled
              className={`absolute bottom-12 left-6 h-2.5 w-2.5 -rotate-6 ${HEART_COLOR}`}
            />
            <HandHeart
              filled
              className={`absolute bottom-14 right-8 h-3 w-3 rotate-6 ${HEART_COLOR}`}
            />

            {/* Одиночная центральная карточка Полароид в стиле американской классики */}
            <motion.div
              initial={{ opacity: 0, rotate: 0, y: 20 }}
              whileInView={{ opacity: 1, rotate: -2, y: 0 }} // Изящный легкий наклон влево для живости
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative z-10 w-[16.5rem] sm:w-[18.5rem] p-3 pb-8 sm:p-4 sm:pb-10 rounded-sm"
            >
              <div className="relative aspect-[3/4] w-full overflow-hidden rounded-sm">
                <Image
                  src="/images/couple-children-1.png"
                  alt="Данислан & Мадина в детстве"
                  fill
                  // ИЗМЕНИТЕ ЭТУ СТРОКУ
                  className="object-contain object-center contrast-[102%] brightness-[101%]" 
                  sizes="(max-width: 640px) 240px, 280px"
                  priority
                />
              </div>
              
              {/* Одиночное аккуратное контурное сердечко на нижнем широком поле полароида */}
              <div className="mt-4 flex justify-center">
                <HandHeart className=" h-4 w-4 text-rose-400/70" />
              </div>
            </motion.div>

          </div>
        </FadeIn>

        {/* Нижний текст приветствия */}
        <FadeIn delay={0.15}>
          <p className="mt-6 font-marck text-xl font-normal leading-[1.65] tracking-wide text-neutral-600 sm:text-2xl px-2">
            {t.guestText}
          </p>
        </FadeIn>
      </div>
    </section>
  );
}