import type { Language } from "./constants";

export const translations = {
  kg: {
    hero: {
      label: "ЧАКЫРУУ БАРАКЧАСЫ",
      quote:
        "Сизди биздин жашообуздагы эн кубанычтуу кун — уйлонуу тоюбузга чакырабыз!",
    },
    guestText:
      "Биз баштап жаткан жаны турмуш жолубузду ушул куну эн жакын адамдарыбыз — сиздер менен болушууну каалайбыз. Сиздердин катышуунуздар биз учун чон сыймык жана кубаныч!",

    countdown: {
      title: "Тойго чейин",
      days: "Күн",
      hours: "Саат",
      minutes: "Мүнөт",
      seconds: "Секунд",
    },
    calendar: {
      month: "Июль 2026",
      weekdays: ["Дш", "Шш", "Шр", "Бш", "Жм", "Иш", "Жк"],
      banquet: "17:00 — Тойдун башталышы",
    },
    location: {
      venue: '"Meikin" рестораны',
      city: "Бишкек",
      openMap: "2GIS картадан көрүү",
    },
    audio: {
      tooltip: "Музыканы кошуу",
    },
    langSwitch: "RU",
  },
  ru: {
    hero: {
      label: "ПРИГЛАШЕНИЕ НА СВАДЬБУ",
      quote:
        "Приглашаем вас разделить с нами самый счастливый день в нашей жизни — день нашей свадьбы!",
    },
    guestText:
      "Мы хотим провести этот особенный день в кругу самых близких людей. Ваше присутствие сделает наш праздник по-настоящему незабываемым.",
    countdown: {
      title: "До свадьбы",
      days: "Дней",
      hours: "Часов",
      minutes: "Минут",
      seconds: "Секунд",
    },
    calendar: {
      month: "Июль 2026",
      weekdays: ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"],
      banquet: "17:00 — Начало банкета",
    },
    location: {
      venue: 'Ресторан "Meikin"',
      city: "Бишкек",
      openMap: "Открыть в 2GIS",
    },
    audio: {
      tooltip: "Включить музыку",
    },
    langSwitch: "KG",
  },
} as const;

export type Translations = (typeof translations)[Language];

export function getTranslations(lang: Language): Translations {
  return translations[lang];
}
