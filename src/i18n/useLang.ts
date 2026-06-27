import { useState, useLayoutEffect } from 'react';
import type { Lang } from './translations';

export function useLang(): Lang {
  const [lang, setLang] = useState<Lang>("fr");
  useLayoutEffect(() => {
    function update() {
      const stored = localStorage.getItem("lang");
      if (stored === "fr" || stored === "en") {
        setLang(stored);
      } else {
        const detected = navigator.language.startsWith("fr") ? "fr" : "en";
        localStorage.setItem("lang", detected);
        setLang(detected);
      }
    }
    update();
    document.addEventListener("astro:page-load", update);
    return () => document.removeEventListener("astro:page-load", update);
  }, []);
  return lang;
}
